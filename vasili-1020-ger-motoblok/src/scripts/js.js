$(document).ready(function () {

    var formOtprData, otprRespText;
    var proverkaTel = function(formOtpr, data) {

        $('.provercaPhone__inputPhone , .provercaPhone-btnTwo').toggleClass('d-none', true).toggleClass('d-block', false);
        $('.provercaPhone__textPhone, .provercaPhone-btn').toggleClass('d-none', false).toggleClass('d-block', true);
        $('.modal').modal('hide');

        $(".provercaPhone-btn__false").click(function (event) {
            event.preventDefault();
            $('.provercaPhone__inputPhone , .provercaPhone-btnTwo').toggleClass('d-block', true).toggleClass('d-none', false);
            $('.provercaPhone__textPhone, .provercaPhone-btn').toggleClass('d-block', false).toggleClass('d-none', true);
            $('.provercaPhone__inputPhone').focus();
        });

        document.querySelector(".provercaPhone-btn__true").onclick = function (event) {
            event.preventDefault();
            $('#modal-proverca').modal('hide');
            alert(otprRespText);
        };
        if(formOtpr.id !== 'provercaPhone'){
            formOtprData = $(formOtpr).serializeArray()
            $(formOtpr).serializeArray().map(function(formData){
                if(formData['name'] === 'phone'){
                    $('#modal-proverca').modal('show');
                    document.querySelector('.provercaPhone__textPhone').textContent = formData['value'];
                    document.querySelector('.provercaPhone__inputPhone').value = formData['value'];
                }
            })
        }else{
            sessionStorage.setItem('formPhone', 1);
            data.push.apply(data, formOtprData);
            $('#modal-proverca').modal('hide');
        }
    }

    try {
        $('.equipment__card').each(function(event,el){
            var asd = $('.equipment__price span', el).text() * 1.27;
            $('.equipment__price-old span', el).text(asd.toFixed())
        })
    } catch (error) {
        console.log(error);
    }

    // Form submit
    $("form").submit(function (event) {
        event.preventDefault();

        // проверка телефона (отключение лишних уведомлений)
        // if(typeof sessionStorage !== 'undefined'){
        //     if(sessionStorage.getItem('formSubmitted')){
        //         if(!confirm('Вы уже отправили заявку, повторить?')){return false}
        //     }else{
        //         sessionStorage.setItem('formSubmitted', 'true')
        //     }
        // }
        // проверка телефона (отключение лишних уведомлений) end
        var data = $(this).serializeArray();

        // проверка телефона
        sessionStorage.setItem('formPhone', 0);
        proverkaTel(this, data);
        // проверка телефона end

        data.push({
            name: "source",
            value: "Ger"
        });
        data.push({
            name: "title",
            value: "Теплица"
        });
        data.push({
            name: "link",
            value: location.href
        });

        // console.log(JSON.stringify(data));
        // return false; // Testing

        $.ajax({
            type: "POST",
            url: "https://skidka-tut.by/action/index.php",
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            dataType: "json",
            data: data,
        }).done(function (response) {
            // проверка телефона (отключение лишних благодарностей)
            otprRespText = response.text;
            if(+sessionStorage.getItem('formPhone')){
                alert(response.text);
            }
            // проверка телефона (отключение лишних благодарностей) end
        }).fail(function (error, textStatus) {
            console.log(error, textStatus);
            alert('Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!');
        });

        // Event dispatcher for IE9+ included
        if(typeof(Event) === 'function') {
            document.dispatchEvent(new Event('app.form.send'));
        }else{
            var ev = document.createEvent('Event');
            ev.initEvent('app.form.send', false, false);
            document.dispatchEvent(ev);
        }

        //console.log(JSON.stringify(data))
        return false
    });

    // Bootstrap modals close when back btn pressed
    $('.modal').on('shown.bs.modal', function() {
        window.location.hash = "modal";
    });
    $('.modal').on('hide.bs.modal', function(event) {
        if(window.location.hash === "#modal") {
            history.replaceState(null, null, ' ');
        }
    });
    $(window).on('hashchange', function (event) {
        if(window.location.hash !== "#modal") {
            $('.modal').modal('hide');
        }
    });

    var presentDown = function(activData, timeout){
        if(activData !== sessionStorage.getItem('presentNumber')){
            sessionStorage.setItem('presentNumber', activData);
        }
        if(!activData){
            sessionStorage.setItem('presentNumber', 18);
            activData = 18;
        }
        if(timeout !== sessionStorage.getItem('presentNumber')){
            sessionStorage.setItem('presentTimeout', timeout);
        }
        if(!sessionStorage.getItem('presentNumber')){
            sessionStorage.setItem('presentTimeout', 10000);
            activData = 10000;
        }

        var decorateNumber = function(activData){
            $('.presentCol').each(function(ind, el){
                $('span', el).each(function(item, index){
                    index.textContent = String(activData)[item];
                    if(index.textContent.length < 1){
                        index.parentNode.removeChild(index);
                    }
                })
            })
            $('span', $('.presentCol__remainder')).each(function(item, index){
                var remainderGifts = String(50-activData)[item];
                if(item === 1){
                    switch (+remainderGifts) {
                        case 1:
                            $('.presentCol__gifts').text('подарок');
                            break;
                        case 2:
                            $('.presentCol__gifts').text('подарка');
                            break;
                        case 3:
                            $('.presentCol__gifts').text('подарка');
                            break;
                        case 4:
                            $('.presentCol__gifts').text('подарка');
                            break;
                        default:
                            $('.presentCol__gifts').text('подарков');
                            break;
                    }
                }
                index.textContent = remainderGifts;
            })
        }

        decorateNumber(+activData)

        if(+activData > 8){
            setTimeout(function(){
                presentDown(--activData,Number(timeout)+10000);
            }, timeout)
        }
    }
    presentDown(sessionStorage.getItem('presentNumber'), sessionStorage.getItem('presentTimeout'))

    // Smooth scroll
    $(".smoothscroll").click(function (event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },
                400
            );
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {

    // фильтр
	try {
        var filterСalc = function(){
            var allForms = document.querySelectorAll("#filter .has-calculator");
            allForms.forEach(function(hasFormAll){
                hasFormAll.classList.remove('remove');
            });
            [].forEach.call(document.querySelectorAll(".filter__buttons .filter__buttons__group"), function(group) {
                [].forEach.call(group.querySelectorAll(".filter__button.active"), function(group__btn) {
                    allForms.forEach(function(hasForm){
                        if(!(hasForm.querySelector("input[name='" + group.dataset.group + "'][value='" + group__btn.dataset.value + "']") || group__btn.dataset.value === 'all' )){
                            console.log(hasForm)
                            hasForm.classList.add('remove');
                        }
                    });
                });
                if(allForms.length === document.querySelectorAll("#filter .has-calculator.remove").length){
                    document.querySelector("#filter-alert").hidden=false;
                }else{
                    document.querySelector("#filter-alert").hidden=true;
                }
            });
        };
        filterСalc();
        [].forEach.call(document.querySelectorAll(".filter__buttons .filter__buttons__group"), function(group) {
            group.addEventListener("click", function(even) {
                if(even.target.classList.contains('filter__button')){
                    Array.prototype.forEach.call(group.querySelectorAll(".filter__buttons .filter__button"), function(a) {
                        a.classList.remove("active")
                    });
                    even.target.classList.add("active");
                    filterСalc();
                }
            });
		});
	} catch(error) {
		console.error(error)
	}
    // фильтр end

    try {
        var raccoon = document.querySelector('.section-raccoon');
        document.onscroll = function () {
            
            var targetPosition = {
                top: window.pageYOffset + raccoon.getBoundingClientRect().top,
                bottom: window.pageYOffset + raccoon.getBoundingClientRect().bottom
            },
            windowPosition = {
                top: window.pageYOffset,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };
            
            if(targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom){
                raccoon.classList.add('active');
            } else {
                raccoon.classList.remove('active');
            }
        };
    } catch (error) {
        console.log(error);
    }

    try{
        /* Animate blocks */
        [].forEach.call(document.querySelectorAll('[data-animation]'), function(observable){
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const fx = observable.dataset.animation.split(' ');
                        observable.classList.add(...fx);
                        observable.addEventListener('animationend', function handler() {
                            observable.classList.remove(...fx);
                            observable.removeEventListener('animationend', handler);
                        });
                        /*Comment this line to repeat animation when viewport return to element*/
                        observer.unobserve(observable);
                    }
                });
            });
            observer.observe(observable);
        });
    }catch (e) {console.error(e);}

    // изменения "Сейчас на сайте"
    if(!sessionStorage.getItem('onlineNow')){
        sessionStorage.setItem('onlineNow', Math.floor(234 + Math.random() * 10));
    }
    document.querySelector('.online_now').textContent = sessionStorage.getItem('onlineNow');
    setInterval(function(){
        sessionStorage.setItem('onlineNow', Math.floor(234 + Math.random() * 10));
        document.querySelector('.online_now').textContent = sessionStorage.getItem('onlineNow')
    }, 7500)
    // изменения "Сейчас на сайте" end

});