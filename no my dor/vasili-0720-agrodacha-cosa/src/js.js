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

    $(function () {
        $('.section-main_plus').tooltip({
          container: 'body',
          html: true
        })
      })

    $("a.smoothscroll").click(function(a) {
        "" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
            scrollTop: $(a).offset().top
        }, 400))
    });

    $(".owl-carousel-modal").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        autoHeight:true,
        navText: ['<i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>'],
    });

});

$.fn.nav = function(a) {
    var b = {
        offset: 0
    };
    $.extend(b, a);
    var c = this;
    $(c).each(function(a, e) {
        var d = $(e.hash),
            f = $(d).offset();
        $(window).scroll(function() {
            var a = $(window).scrollTop() + b.offset;
            f.top < a && a < f.top + $(d).height() && ($(c).removeClass("active"), $(e).addClass("active"))
        })
    })
};
$(".js-nav-scroll").nav({
    offset: 150
});

document.addEventListener("DOMContentLoaded", function () {

    try {
    	// countdown
        let dateEnd = new Date();
        dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
        dateEnd.setHours(0, 0, 0);
        let countdown = new LightCountdown(".countdown-week", dateEnd, {animation: "animated flipInX", animationDuration: "600ms"});
    } catch (e) {console.error(e);}

    window.addEventListener(`resize`, event => {
        document.querySelector('.main-present').style.height = document.querySelector('.main-present').scrollHeight + 'px';
      }, false);
    document.querySelector('.main-present').style.height = document.querySelector('.main-present').scrollHeight + 'px';
    document.querySelector('.main-present').onclick = function () {
        var asd = document.querySelector('.main-present');
        if(asd.offsetHeight === asd.scrollHeight){
            document.querySelector('.main-present').style.height = document.querySelector('.main-present__title').offsetHeight + 'px';
            document.querySelector('.main-present__btn').classList.remove('main-present__show');
        }else {
            document.querySelector('.main-present').style.height = document.querySelector('.main-present').scrollHeight + 'px';
            document.querySelector('.main-present__btn').classList.add('main-present__show');
        }
    }

    document.onscroll = function () {
		if(window.pageYOffset >= 100){
			document.querySelector('.main-nav').classList.add('fixHead');
		} else {
			document.querySelector('.main-nav').classList.remove('fixHead');
		}
	};

});