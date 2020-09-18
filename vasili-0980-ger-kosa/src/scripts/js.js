$(document).ready(function() {

    // Form submit
    $("form").submit(function (event) {
        event.preventDefault();

        if(typeof sessionStorage !== 'undefined'){
            if(sessionStorage.getItem('formSubmitted')){
                if(!confirm('Вы уже отправили заявку, повторить?')){return false}
            }else{
                sessionStorage.setItem('formSubmitted', 'true')
            }
        }

        var data = $(this).serializeArray();
        data.push({
            name: "source",
            value: "Ger"
        });
        data.push({
            name: "title",
            value: "Коса"
        });
        data.push({
            name: "link",
            value: location.href
        });

        /*console.log(JSON.stringify(data));
        return false;*/ // Testing

        $.ajax({
            type: "POST",
            url: "https://skidka-tut.by/action/index.php",
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            dataType: "json",
            data: data,
        }).done(function (response) {
            alert(response.text);
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

    $('body').mouseleave(function (event) {
        if (typeof sessionStorage !== 'undefined') {
            if (!sessionStorage.getItem('modalLeaveShowed') && event.clientY < -12) {
                sessionStorage.setItem('modalLeaveShowed', 'true');
                $('#modal-leave').modal('show');
            }
        }
    });

    // Smooth scroll
    $(".smoothscroll").click(function (event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400);
        } // End if
    });

});

document.addEventListener('DOMContentLoaded', function(){

    try{
        /* Custom Filters */
        let filter_buttons = document.querySelectorAll('.filter__buttons .filter__button__custom');
        [].forEach.call(filter_buttons, function(filter_button){
            filter_button.addEventListener('click', function() {
                let group = filter_button.closest('.filter__buttons__group');
                Array.prototype.forEach.call(group.querySelectorAll('.filter__button__custom'), function (link) {
                    link.classList.remove('active')
                });
                filter_button.classList.add('active');
                [].forEach.call(document.querySelectorAll('#filter .has-calculator'), function (form) {
                    let input = form.querySelector("input[name='" + filter_button.dataset.name + "'][value='" + filter_button.dataset.value + "']");
                    input.checked = true;
                    form.dispatchEvent(new Event('change'));
                });
            });
        });
    }catch (e) {console.error(e);}

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

    try{
        /* countdown */
        let dateEnd = new Date();
        dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
        dateEnd.setHours(0, 0, 0);
        let countdown = new LightCountdown('.countdown-week', dateEnd, {animation: "animated flipInX"});
    }catch (e) {console.error(e);}

});