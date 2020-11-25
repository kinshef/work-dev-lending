$(function () {

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

    $('.slider-mine__img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-mine__text',
        arrows: true,
        dots: false,
        prevArrow: $('.slider-mine__prev'),
        nextArrow: $('.slider-mine__next'),
    });
    $('.slider-mine__text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-mine__img',
        arrows: false,
        dots: true,
    });

    $('.single-catalog').slick({
        dots: true,
    });

    $('.single-modal').slick({
        dots: false,
    })

    $('.modal-product').click(function(){
        $('.single-modal').slick('refresh');
    })

    $('.single-reviews').slick({
        dots: true,
        prevArrow: $('.single-reviews__prev'),
        nextArrow: $('.single-reviews__next'),
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.single-aboutUs').slick({
        dots: true,
        prevArrow: $('.single-aboutUs__prev'),
        nextArrow: $('.single-aboutUs__next'),
        arrows: true,
        slidesToShow: 4,
    });

    $("a.smoothscroll").click(function(a) {
        "" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
            scrollTop: $(a).offset().top - 150
        }, 400))
    });

    // links hightLight after scroll page
    $.fn.nav = function (item) {
        var point = {
            offset: 0
        };
        $.extend(point, item);
        var links = this;
        $(links).each(function (a, index) {
            var link = $(index.hash);
            var place = $(link).offset();
            $(window).scroll(function () {
                var newPoint = $(window).scrollTop() + point.offset;
                place.top < newPoint && newPoint < place.top + $(link).height() && ($(links).removeClass("active"), $(index).addClass("active"))
            })
        })
    };
    $(".js-nav-scroll").nav({
        offset: 150
    });

});
document.addEventListener("DOMContentLoaded", function () {

    try {
        var mainNav = document.querySelector('.section-header');
        document.onscroll = function () {
            if(window.pageYOffset >= 100){
                mainNav.classList.add('fixHead');
            } else {
                mainNav.classList.remove('fixHead');
            }
        };
    } catch (error) {
        console.error(error)
      }

});












