$(function () {

    // Form submit
    $("form").submit(function (event) {
        event.preventDefault()

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
            value: "Agropapa"
        });
        data.push({
            name: "title",
            value: "Перезвонить по сварке"
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
            beforeSend: function () {
                new Noty({
                    text: 'Отправка запроса...',
                    type: 'information'
                }).show();
            }
        }).done(function (response) {
            new Noty({
                text: response.text,
                type: response.type,
                timeout: 10000,
                killer: true
            }).show();
        }).fail(function (error, textStatus) {
            console.log(textStatus);
            new Noty({
                text: 'Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!',
                type: 'error',
                killer: true
            }).show();
        });

        try {
            ym(55862806, 'reachGoal', 'form_send');
        }catch (error) {console.log(error)}

        //console.log(JSON.stringify(data))
        return false
    });

    $('body').mouseleave(function (event) {
        if (typeof sessionStorage !== 'undefined') {
            if (!sessionStorage.getItem('modalLeaveShowed') && event.clientY < -12) {
                sessionStorage.setItem('modalLeaveShowed', 'true');
                $('#modal-leave').modal('show');
            }
        }
    });

    $('[data-toggle="popover"]').popover()

    // Smooth scroll
    $("a.smoothscroll").click(function (event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            try {
                // Using jQuery's animate() method to add smooth page scroll
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 200
                }, 400);
            } catch (e) {
                // Hide error when hash not found
            }
        } // End if
    })

    $.fn.nav = function (o) {
        var options = {
            offset: 0
        }
        $.extend(options, o)
        var match = this
        $(match).each(function (i, e) {
            var div = $(e.hash)
            if (div.length < 1) {
                return
            }
            var divOffset = $(div).offset()
            $(window).scroll(function () {
                var scrolled = $(window).scrollTop() + options.offset
                if (divOffset.top < scrolled && scrolled < divOffset.top + $(div).height()) {
                    $(match).removeClass('active')
                    $(e).addClass('active')
                }
            })
        })
    }
    $('nav a.nav__link').nav({
        offset: 220
    })

})

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
        var dateEnd = new Date();
        dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
        dateEnd.setHours(0, 0, 0);
        var countdown = new LightCountdown(".countdown-week", dateEnd, {
            animation: "animated flipInX", 
            animationDuration: "600ms"
        })
    } catch (e) {
        console.error(e);
    }

















    var calculationOption = document.querySelector('.cost-calculation .left-option .calculation-option>div');
    var calculatorBtnNext = document.querySelector('.left-option span.next');
    var calculatorBtnPrev = document.querySelector('.left-option span.prev');
    var btnTo = 0;

    function disabledBtnNext(sdvig, btn, uslPoz) {
        if(parseFloat(sdvig.style.left)>uslPoz){
            btn.classList.remove('disabled');
        }else{
            btn.classList.add('disabled');
        }
    }
    function disabledBtnPrev(sdvig, btn, uslPoz) {
        if(parseFloat(sdvig.style.left)<uslPoz){
            btn.classList.remove('disabled');
        }else{
            btn.classList.add('disabled');
        }
    }

    function calculatorNext(sdvig, btnTo) {
        if(parseFloat(sdvig.style.left)>btnTo){
            sdvig.style.left = (parseFloat(sdvig.style.left) - 100) + '%';
            disabledBtnPrev(sdvig, calculatorBtnPrev, 0);
            disabledBtnNext(sdvig, calculatorBtnNext, btnTo);
        }
    }
    function calculatorPrev(sdvig) {
        if(parseFloat(sdvig.style.left)<0 && !calculatorBtnPrev.classList.contains('disabled')){
            sdvig.style.left = (parseFloat(sdvig.style.left) + 100) + '%';
            disabledBtnNext(sdvig, calculatorBtnNext, btnTo);
            disabledBtnPrev(sdvig, calculatorBtnPrev, 0);
        }
    }

    calculatorBtnNext.onclick = function () {
        calculatorNext(calculationOption, btnTo);
    };
    calculatorBtnPrev.onclick = function () {
        calculatorPrev(calculationOption);
    };


    var costCalculation = document.querySelector("form.cost-calculation")
    costCalculation.onchange = function(){
        var typeGreenhouses = costCalculation.querySelector("input[name='typeGreenhouses']:checked");
        var duga = costCalculation.querySelector("input[name='duga']:checked");
        var length = costCalculation.querySelector("input[name='length']:checked");
        if(typeGreenhouses && !duga){
            btnTo = -100;
            calculatorNext(calculationOption, btnTo);
        }
        if(duga && !length){
            btnTo = -200;
            calculatorNext(calculationOption, btnTo);
        }
        if(length){
            btnTo = -300;
            calculatorNext(calculationOption, btnTo);
        }
}

    function asd() {
        if(document.querySelector('.cost-calculation .left-option .calculation-option>div').offsetHeight>0){
            if(document.querySelector('.cost-calculation .left-option .calculation-option>div').offsetHeight<40){
                document.querySelector('.left-option .calculation-option').style.height = 80 + 'vh';
                disabledBtnPrev(calculationOption, calculatorBtnPrev, 0);
                disabledBtnNext(calculationOption, calculatorBtnNext, btnTo);
                return;
            }else{
                document.querySelector('.left-option .calculation-option').style.height = calculationOption.offsetHeight + 'px';
                disabledBtnPrev(calculationOption, calculatorBtnPrev, 0);
                disabledBtnNext(calculationOption, calculatorBtnNext, btnTo);
                return;
            }
        }else {
            setTimeout(asd,100);
        }
    }



    document.querySelector('.calculator-start span.btn').onclick = function () {
        document.querySelector('.calculator-start').classList.add('activ');
        setTimeout(function(){document.querySelector('.calculator-start').style.display = 'none';},900);
        setTimeout(function(){
            document.querySelector('.calculator-wrap').style.display = 'block';
            document.querySelector('#modal-calculate>div>div>div.modal-body').classList.remove('p-0');
            document.querySelector('#modal-calculate>div>div>div>div.modal-body').classList.remove('p-0');
        },900);
        asd();
    }

});