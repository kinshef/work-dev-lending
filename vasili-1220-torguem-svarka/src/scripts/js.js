$(function () {
    // Notification plugin global settings
    $.noty.defaults.theme = 'defaultTheme' //defaultTheme, metroui, relax
    $.noty.defaults.layout = 'top'
    
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

        var data = $(this).serializeArray()
        data.push({
            name: "subject",
            value: "Сварка"
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
            name: "link",
            value: location.href
        })

        /*console.log(JSON.stringify(data));
        return false;*/

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
            console.log(error, textStatus)
            noty({
                text: 'Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!',
                type: 'error'
            })
        }).always(function () {
            window.nSend.close()
        })

        try {
            ym(47791231, 'reachGoal', 'form_send');
        }catch (error) {
            console.log(error)
        }

        //console.log(JSON.stringify(data))
        return false
    })
    
    // Smooth scroll
    $("a.smoothscroll").click(function (event) {
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
    })
    
    $.fn.nav = function (o) {
        var options = {
            offset: 0
        }
        $.extend(options, o)
        var match = this
        $(match).each(function (i, e) {
            var div = $(e.hash)
            if (div.length) {
                var divOffset = $(div).offset()
                $(window).scroll(function () {
                    var scrolled = $(window).scrollTop() + options.offset
                    if (divOffset.top < scrolled && scrolled < divOffset.top + $(div).height()) {
                        $(match).removeClass('active')
                        $(e).addClass('active')
                    }
                })
            }
        })
    }

    $('nav a.js-nav-link').nav({
        offset: 150
    })
    
})

document.addEventListener('DOMContentLoaded', function(){

    /* countdown */
    var dateEnd = new Date();
    dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
    dateEnd.setHours(0, 0, 0);
    var countdown = new LightCountdown('.countdown-week', dateEnd);

});

// SETTINGS
var app = {
    h: 'cHJvbW8uYWdyb2NhdGFsb2cuYnk='
}
