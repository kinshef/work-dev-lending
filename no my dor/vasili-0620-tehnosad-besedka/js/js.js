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

    $("body").mouseleave(function (event) {
        if (typeof sessionStorage !== "undefined") {
            if (!sessionStorage.getItem("modalLeaveShowed") && event.clientY < -12) {
                sessionStorage.setItem("modalLeaveShowed", "true");
                $("#modal-leave").modal("show");
            }
        }
    });

    // Smooth scroll
    $(".smoothscroll").click(function (event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },
                400
            );
        }
    });

    $(".owl-carousel-catalog").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        navText: ['<i class="fa fa-lg fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-lg fa-angle-right" aria-hidden="true"></i>'],
    });
    Array.prototype.forEach.call($(".catalog__card"), function (item){
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
    })

});
document.addEventListener("DOMContentLoaded", function() {

	try {
		[].forEach.call(document.querySelectorAll(".js-nav-scroll"), function(a) {
			if("undefined" !== typeof a.hash && null !== document.querySelector(a.hash)) {
				var b = document.querySelector(a.hash);
				(new IntersectionObserver(function(b) {
					b.forEach(function(b) {
						b.isIntersecting && ([].forEach.call(document.querySelectorAll(".js-nav-scroll"), function(a) {
							a.classList.remove("active")
						}), a.classList.add("active"))
					})
				})).observe(b)
			}
		})
	} catch(b) {
		console.error(b)
    }

	try {
		[].forEach.call(document.querySelectorAll(".lightbox"), function(a) {
			a.addEventListener("click", function(a) {
				a.preventDefault();
				a = document.createElement("img");
				a.src = this.href;
				basicLightbox.create(a.outerHTML).show()
			})
		})
	} catch(b) {
		console.error(b)
    }

	try {
		var a = 0;
		window.addEventListener("scroll", function() {
			var b = document.body.scrollTop || document.documentElement.scrollTop;
			b != a && (b > a ? document.getElementById("section-nav").classList.add("js-scroll-down") : document.getElementById("section-nav").classList.remove("js-scroll-down"), a = b)
		})
	} catch(b) {
		console.error(b)
    }

    try {
    	// countdown
        var dateEnd = new Date();
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