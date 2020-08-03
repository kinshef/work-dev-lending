$(function () {


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


    $(".owl-carousel-catalog").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        autoHeight:true,
        navText: ['<i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>'],
    });

    $('.recall__list').owlCarousel({
        items: 2,
        slideBy: 1,
        dots: 1,
        loop: true,
        margin: 0,
        navText: false,
        nav: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                nav: true,
                touchDrag: true,
                slideBy: 1
            },
            769: {
                items: 2,
                nav: true,
                slideBy: 1
            }
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {

});












