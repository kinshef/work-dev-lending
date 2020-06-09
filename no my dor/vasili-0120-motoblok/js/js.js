var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
	var c = 0;
	return function() {
		return c < a.length ? {
			done: !1,
			value: a[c++]
		} : {
			done: !0
		}
	}
};
$jscomp.arrayIterator = function(a) {
	return {
		next: $jscomp.arrayIteratorImpl(a)
	}
};
$jscomp.makeIterator = function(a) {
	var c = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
	return c ? c.call(a) : $jscomp.arrayIterator(a)
};
$jscomp.arrayFromIterator = function(a) {
	for(var c, b = []; !(c = a.next()).done;) b.push(c.value);
	return b
};
$jscomp.arrayFromIterable = function(a) {
	return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a))
};





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
    debugger;
    var data = $(this).serializeArray();
    data.push({
        name: "subject",
        value: "Мотоблок"
    });
    data.push({
        name: "site",
        value: "agrocatalog.by"
    });
    data.push({
        name: "link",
        value: location.href
    });
    /*console.log(JSON.stringify(data));
    return false;*/ // Testing
    $.ajax({
        type: "POST",
        url: "https://skidka-tut.by/mail/ajax.php",
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        dataType: "json",
        data: data,
        beforeSend: function() {
				window.nSend = noty({
					text: "Отправка запроса...",
					type: "information",
					animation: {
						open: !1,
						close: !1
					}
				})
			}
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

	// Smooth scroll
	$("a.smoothscroll").click(function (event) {
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			$("html, body").animate({
				scrollTop: $(hash).offset().top - 120
			},
				400
			);
		}
	});






	$.fn.nav = function(b) {
		var a = {
			offset: 0
		};
		$.extend(a, b);
		var c = this;
		$(c).each(function(b, e) {
			var f = $(e.hash),
				d = $(f).offset();
			$(window).scroll(function() {
				var b = $(window).scrollTop() + a.offset;
				d.top < b && b < d.top + $(f).height() && ($(c).removeClass("active"), $(e).addClass("active"))
			})
		})
	};
	$(".js-nav-scroll").nav({
		offset: 150
	});


	$("#modal-order").on("show.bs.modal", function(b) {
		b = $(b.relatedTarget).closest(".modal");
		0 < b.length && b.modal("hide")
	});
	$('[data-toggle="popover"]').popover();
	$(".c__modal-gallery__link").click(function(b) {
		b.preventDefault();
		$(this).closest(".c__modal-gallery").find(".c__modal-gallery__img").attr("src", $(this).attr("href"));
		return !1
	});

	$(".owl-carousel-prodyctsImg").owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		navText: ["<", ">"]
	});
	var c = $(".owl-carousel-brand").owlCarousel({
		items: 1,
		mouseDrag: !1,
		touchDrag: !1,
		nav: !1,
		dots: !1
	});

	$(".c__action__brand_to").click(function() {
		c.trigger("to.owl.carousel", $(this).data("index"));
		$(".c__action__brand_to").removeClass("active");
		$(this).addClass("active")
	})

});

document.addEventListener("DOMContentLoaded", function() {
	try {
		[].forEach.call(document.querySelectorAll("[data-animation]"), function(a) {
			var b = new IntersectionObserver(function(c) {
				c.forEach(function(c) {
					if(c.isIntersecting) {
						var d = a.dataset.animation.split(" ");
						a.classList.add.apply(a.classList, $jscomp.arrayFromIterable(d));
						a.addEventListener("animationend", function f() {
							a.classList.remove.apply(a.classList, $jscomp.arrayFromIterable(d));
							a.removeEventListener("animationend", f)
						});
						b.unobserve(a)
					}
				})
			});
			b.observe(a)
		})
	} catch(c) {
		console.error(c)
	}

	/* countdown */
  try {
      var dateEnd = new Date();
      dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
      dateEnd.setHours(0, 0, 0);
      var countdown = new LightCountdown(".countdown-week", dateEnd, {
      	animation: "animated flipInX", 
      	animationDuration: "600ms"
      });
  } catch (e) {
  	console.error(e);
  }
});

var app = {
	h: "cHJvbW8uYWdyb2NhdGFsb2cuYnk="
};