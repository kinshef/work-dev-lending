$(function () {

    // Form submit
    $("form").submit(function (event) {
        event.preventDefault()

        if(typeof sessionStorage !== 'undefined'){
            if(sessionStorage.getItem('formSubmited')){
                if(!confirm('Вы уже отправили заявку, повторить?')){return false}
            }else{
                sessionStorage.setItem('formSubmited', true)
            }
        }

        var data = $(this).serializeArray()
        data.push({
            name: "subject",
            value: "Перезвонить по косе"
        })
        data.push({
            name: "action",
            value: "sendMail"
        })
        data.push({
            name: "toEmail",
            value: "order"
        })
        data.push({
            name: "page",
            value: "https://torguem.by/promo/kosa/"
        })

        /*console.log(JSON.stringify(data));
        noty({
            text: JSON.stringify(data),
            type: 'success',
            timeout: 10000
        })
        return false;*/ // Testing
        $.ajax({
            type: "POST",
            url: "/system-page/ajax.html", // http://skidka-tut.by/mail/ajax.php
            dataType: "html",
            data: data,
            beforeSend: function () {
                window.nSend = noty({
                    text: 'Отправка запроса...',
                    type: 'information',
                    animation: {
                        open: false,
                        close: false
                    }
                });
            }
        }).done(function (response) {
            noty({
                text: response,
                type: 'success',
                timeout: 10000
            })
        }).fail(function (error, textStatus) {
            console.log(textStatus)
            noty({
                text: 'Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!',
                type: 'error'
            })
        }).always(function () {
            window.nSend.close()
        })

        //console.log(JSON.stringify(data))
        return false
    })

    $('body').mouseleave(function(event){
        if(typeof sessionStorage !== 'undefined'){
            if(!sessionStorage.getItem('modalLeaveShowed' ) && event.clientY < -5){
                sessionStorage.setItem('modalLeaveShowed', true)
                $.fancybox.open({
                    src  : '#modal-leave',
                    type : 'inline'
                });
            }
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('#section-nav').addClass('fixed-nav')
        }else{
            $('#section-nav').removeClass('fixed-nav')
        }
    })
    $(window).scroll()

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
                    scrollTop: $(hash).offset().top - 100
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
var dateNow = new Date()
var dateEnd = new Date(
    dateNow.getFullYear(),
    dateNow.getMonth(),
    dateNow.getDay() ? dateNow.getDate() - dateNow.getDay() + 8 : dateNow.getDate() + 1
)
var countdown = new LightCountdown('.countdown-week', dateEnd);
var app = {h:'cHJvbW8uYWdyb21hZy5ieQ=='}