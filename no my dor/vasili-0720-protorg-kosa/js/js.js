$(document).ready(function() {

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

    // Show popup when user leave site
    $('body').mouseleave(function (event) {
        if (typeof sessionStorage !== 'undefined') {
            if (!sessionStorage.getItem('modalLeaveShowed') && event.clientY < -12) {
                sessionStorage.setItem('modalLeaveShowed', 'true');
                $('#modal-leave').modal('show');
            }
        }
    });

    $(window).on("scroll", function() {
		80 < $(this).scrollTop() && $("#section-header").css("background", "rgba(256, 256, 256, 0.95)") && $(".header__text_color").hover(function() {
			$(this).css("color", "#000")
		}, function() {
			$(this).css("color", "#ff7d08")
		}) || 30 < $(this).scrollTop() && 992 > $(window).width() && $("#section-header").css("background", "rgba(256, 256, 256, 0.95)") && $(".header__text_color").hover(function() {
			$(this).css("color", "#000")
		}, function() {
			$(this).css("color", "#ff7d08")
		}) || $("#section-header").css("background", "rgba(0, 0, 0, 0)") && $(".header__text_color").hover(function() {
			$(this).css("color", "#fff")
		}, function() {
			$(this).css("color", "#ff7d08")
		})
    });

    $("#section-main").parallax({
		imageSrc: "./img/bg_header.jpg"
    });
    
    $(".review__list").slick({
		infinite: !0,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}]
    });

    $("a[href='#callback']").magnificPopup({
		mainClass: "mfp-fade",
		removalDelay: 300,
		type: "inline",
		fixedContentPos: !0
    });

    $(".navigated").click(function(a) {
		return a.preventDefault(), a = $(this).attr("href"), $.scrollTo(a, 800, {
			offset: -110
		}), !1
    });
    
    $(".mobile_navigated").click(function(a) {
		return a.preventDefault(), a = $(this).attr("href"), $.scrollTo(a, 800, {
			offset: -50
		}), !1
    });

    $(".owl-carousel-productsImg").owlCarousel({
		items: 1,
		nav: !0,
		loop: !0,
		autoHeight: !0,
		navText: ["<i class=\"fa mr-3 fa-lg fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa ml-3 fa-lg fa-angle-right\" aria-hidden=\"true\"></i>"]
    });

    $(".owl-carousel-catalog").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        navText: ['<i class="fa fa-lg fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-lg fa-angle-right" aria-hidden="true"></i>'],
    });
    Array.prototype.forEach.call($(".has-calculator"), function (item){
        $(".owl-carousel-catalog").on('changed.owl.carousel', function(event) {
            if(event.target === $(".owl-carousel-catalog", item)[0]){
                $(".catalog-slader-dot", item).removeClass('active');
                $(".catalog-slader-dot:nth-child("+(event.page.index+1)+")", item).addClass("active")
            }
        })
        $(".catalog-slader-dot", item).click(function(event){
            for(var i=0; i<$(".catalog-slader-dot", item).length; i++){
                if($(".catalog-slader-dot", item)[i] === event.target){
                    $(".owl-carousel-catalog", item).trigger('to.owl.carousel', i)
                }
            }
        })
    });
    
});

document.addEventListener("DOMContentLoaded", function() {

    try {
    	// countdown
        let dateEnd = new Date();
        dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
        dateEnd.setHours(0, 0, 0);
        new LightCountdown(".countdown-week", dateEnd, {
            animation: "animated flipInX", 
            animationDuration: "600ms"
        });
    } catch (e) {
        console.error(e);
    }

});
