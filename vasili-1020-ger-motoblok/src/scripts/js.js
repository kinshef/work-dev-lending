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

    $(".owl-carousel-prodyctsImg").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        autoHeight:true,
        navText: ['<i class="fa fa-lg fa-2x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-lg fa-2x fa-angle-right" aria-hidden="true"></i>'],
    });

});

document.addEventListener("DOMContentLoaded", function () {


    try {
        var raccoon = document.querySelector('.section-raccoon');
        document.onscroll = function () {
            if(window.pageYOffset >= 11500){
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