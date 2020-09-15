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
            value: "Test"
        });
        data.push({
            name: "title",
            value: "Test message"
        });
        data.push({
            name: "link",
            value: location.href
        });

        var asd = 'asdasd'
        otprRespText = asd;

        console.log(JSON.stringify(data));
        return false; // Testing

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
                    scrollTop: $(hash).offset().top - 100
                },
                400
            );
        }
    });

    $(".catalog-toggle__btn").click(function() {
        var a = $(this).parent(".catalog-toggle").find(".catalog-toggle__container");
        a.length && a.slideToggle()
    })

});

document.addEventListener("DOMContentLoaded", function () {

    try {
        /* Animate blocks */
        [].forEach.call(document.querySelectorAll("[data-animation]"), function (observable) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const fx = observable.dataset.animation.split(" ");
                        observable.classList.add(...fx);
                        observable.addEventListener("animationend", function handler() {
                            observable.classList.remove(...fx);
                            observable.removeEventListener("animationend", handler);
                        });
                        /*Comment this line to repeat animation when viewport return to element*/
                        observer.unobserve(observable);
                    }
                });
            });
            observer.observe(observable);
        });
    } catch (e) {console.error(e);}

    try {
        /* countdown */
        let dateEnd = new Date();
        dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
        dateEnd.setHours(0, 0, 0);
        let countdown = new LightCountdown(".countdown-week", dateEnd, {animation: "animated flipInX", animationDuration: "600ms"});
    } catch (e) {console.error(e);}

    try{
        /* highlight current link in navigation */
        [].forEach.call(document.querySelectorAll('.js-nav-scroll'), function(el){
            if(typeof el.hash !== "undefined" && document.querySelector(el.hash) !== null){
                const observable = document.querySelector(el.hash);
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            [].forEach.call(document.querySelectorAll('.js-nav-scroll'), function(el2){
                                el2.classList.remove('active');
                            });
                            el.classList.add('active');
                        }
                    });
                });
                observer.observe(observable);
            }
        });
    }catch (e) {console.error(e);}

    try {
        var btnParam = document.querySelectorAll(".js-calculator-group-values");
        [].forEach.call(btnParam, function (btnParam) {
            btnParam.addEventListener("click", function () {
                if(btnParam.dataset.product){
                    var formActive = document.querySelector("#section-catalog .has-calculator input[name='product'][value='" + btnParam.dataset.product + "']").parentElement;
                    formActive.querySelector("input[name='" + btnParam.dataset.name + "'][value='" + btnParam.dataset.value + "']").checked = !0;
                    formActive.dispatchEvent(new Event("change"));
                }else{
                    [].forEach.call(document.querySelectorAll("#section-catalog .has-calculator"), function (formActive) {
                        formActive.querySelector("input[name='" + btnParam.dataset.name + "'][value='" + btnParam.dataset.value + "']").checked = !0;
                        formActive.dispatchEvent(new Event("change"))
                    })
                }
            })
        })
    } catch (e) {
        console.error(e)
    }

});