$(function() {
	$(".owl-reviews").owlCarousel({
		responsive: {
			375: {
				items: 1
			},
			1024: {
				items: 2
			},
			1025: {
				items: 3
			}
		},
		margin: 30,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-5x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-5x fa-angle-right" aria-hidden="true"></i>'],
		freeDrag: false,
		dots: false
	});

    // Form submit
    $("form").submit(function (event) {
        event.preventDefault();

        if (typeof sessionStorage !== 'undefined') {
        if (sessionStorage.getItem('formSubmitted')) {
            if (!confirm('Вы уже отправили заявку, повторить?')) { return false }
        } else {
            sessionStorage.setItem('formSubmitted', 'true')
        }
        }
        var data = $(this).serializeArray();
        data.push({
        name: "source",
        value: "Belagrosad"
        });
        data.push({
        name: "title",
        value: "Kosa"
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
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        dataType: "json",
        data: data,
        }).done(function (response) {
        alert(response.text);
        }).fail(function (error, textStatus) {
        console.log(error, textStatus);
        alert('Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!');
        });

        // Event dispatcher for IE9+ included
        if (typeof (Event) === 'function') {
        document.dispatchEvent(new Event('app.form.send'));
        } else {
        var ev = document.createEvent('Event');
        ev.initEvent('app.form.send', false, false);
        document.dispatchEvent(ev);
        }

        //console.log(JSON.stringify(data))
        return false
    });
    
    // Smooth scroll
    $(".smoothscroll").click(function (event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate({
            scrollTop: $(hash).offset().top
            },400
        );
        }
    });

    //Fix nav
    $(window).scroll(function () {
        230 < $(window).scrollTop() ? $("#section-header").addClass("header__active") :
            $("#section-header").removeClass("header__active")
    });
    $(window).scroll();

});