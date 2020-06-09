$(document).ready(function () {

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

    //Smoothscroll
    $(".smoothscroll").click(function (event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top - 59
                },
                400
            );
        }
    });

    // Hide navbar after click on the link
    $(document).on('click', '.navbar-collapse', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

	$(".owl-carousel").owlCarousel({
		loop: !0,
		margin: 0,
		responsiveClass: !0,
		dots: !1,
		navElement: "div",
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		responsive: {
			0: {
				items: 1,
				nav: !0
			}
		}
	});

    try {
        // countdown
        let dateEnd = new Date();
        dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
        dateEnd.setHours(0, 0, 0);
        new LightCountdown(".countdown-week", dateEnd, {
            animation: "animated flipInX",
            animationDuration: "600ms"
        })
    } catch (e) {console.error(e);}


    // try {
    //     [].forEach.call(document.querySelectorAll(".header__item"), function (a) {
    //         if ("undefined" != typeof a.hash && null !== document.querySelector(a.hash)) {
    //             const b = document.querySelector(a.hash), c = new IntersectionObserver(b => {
    //                 b.forEach(b => {
    //                     b.isIntersecting && ([].forEach.call(document.querySelectorAll(".header__item"), function (a) {
    //                         a.classList.remove("header__item_active")
    //                     }), a.classList.add("header__item_active"))
    //                 })
    //             });
    //             c.observe(b)
    //         }
    //     })
    // } catch (a) {
    //     console.error(a)
    // }

});
document.addEventListener("DOMContentLoaded", function() {
    var b = function() {
        for(var a = document.querySelectorAll(".section-advantages .advantages-animaid>div"), b = 0; b < a.length; b++){
            if(!a[b].classList.contains("animation")) {
                var c = a[b],
                d = window.pageYOffset + c.getBoundingClientRect().top,
                e = window.pageYOffset + c.getBoundingClientRect().bottom,
                f = window.pageYOffset + document.documentElement.clientHeight;
                e > window.pageYOffset && d < f && c.classList.add("animation")
            }
        }
    };
    b();
    window.addEventListener("scroll", function() {
        b()
    })
});