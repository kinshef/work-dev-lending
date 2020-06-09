$(function () {

    $('.owl-specifications').owlCarousel({
        items:1,
        margin: 30,
        loop:true,
        nav:true,
        navText: ['<i class="fa fa-lg fa-2x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-lg fa-2x fa-angle-right" aria-hidden="true"></i>'],
        freeDrag: false,
        dots:true,
        autoHeight:true
    });

    $('.owl-reviews').owlCarousel({
        responsive : {
            375 : {
                items:1
            },
            1024 : {
                items:2
            },
            1025 : {
                items:3
            }
        },
        margin: 30,
        loop:true,
        nav:true,
        navText: ['<i class="fa fa-3x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-3x fa-angle-right" aria-hidden="true"></i>'],
        freeDrag: false,
        dots:false
    })

    $(".owl-carousel-prodyctsImg").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        autoHeight:true,
        navText: ['<i class="fa fa-lg fa-2x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-lg fa-2x fa-angle-right" aria-hidden="true"></i>'],
    });

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

})



document.addEventListener("DOMContentLoaded", function () {
/* countdown */
    try {
        var dateEnd = new Date();
        dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
        dateEnd.setHours(0, 0, 0);
        var countdown = new LightCountdown(".countdown-week", dateEnd, {animation: "animated flipInX", animationDuration: "600ms"});
    } catch (e) {console.error(e);}

// плавный якорь
$("a.smoothscroll").click(function(a) {
    "" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
        scrollTop: $(a).offset().top
    }, 400))
});
// плавный якорь /
});












