$(function () {

    $('.owl-specifications').owlCarousel({
        items:1,
        margin: 30,
        loop:true,
        nav:false,
        freeDrag: false,
        dots:true,
        autoHeight:true
    });
    $('.owl-reviews').owlCarousel({
        items:1,
        margin: 30,
        loop:true,
        nav:true,
        navText: ['&#10092;', '&#10093;'],
        freeDrag: false,
        dots:false
    })

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
// картинки снизу owl-carousel
    var slaider__dotImg_Wrap = document.querySelector('.specifications-slaider__dot');
    var slaider__dotImg = document.querySelectorAll('.specifications-slaider__dot>div>img');

    slaider__dotImg_Wrap.onclick = function(){
        for(let i = 0; i < slaider__dotImg.length; i++) {
            if(event.target == slaider__dotImg[i]) {
                var slaider__owl = document.querySelectorAll('.owl-dots>div');
                slaider__owl[i].click()
            }
        }
    }
// картинки снизу owl-carousel /
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












