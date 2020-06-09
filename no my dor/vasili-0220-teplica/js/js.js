var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
	var b = 0;
	return function() {
		return b < a.length ? {
			done: !1,
			value: a[b++]
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
	var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
	return b ? b.call(a) : $jscomp.arrayIterator(a)
};
$jscomp.arrayFromIterator = function(a) {
	for(var b, c = []; !(b = a.next()).done;) c.push(b.value);
	return c
};
$jscomp.arrayFromIterable = function(a) {
	return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a))
};



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
    debugger;
    var data = $(this).serializeArray();
    data.push({
        name: "source",
        value: "Перезвонить по теплице"
    });
    data.push({
        name: "site",
        value: "ksl.by"
    });
    data.push({
        name: "link",
        value: location.href
    });
    /*console.log(JSON.stringify(data));
    return false;*/ // Testing
    $.ajax({
			type: "POST",
			url: "http://skidka-tut.by/mail/ajax.php",
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
		try {
			ym(24867581, "reachGoal", "form_send")
		} catch(b) {
			console.log(b)
		}
		return !1
	});

	$("a.smoothscroll").click(function(a) {
		"" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
			scrollTop: $(a).offset().top
		}, 400))
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
	$(window).scroll(function() {
		10 < $(window).scrollTop() ? $("#section-nav").removeClass("nav-transparent") : $("#section-nav").addClass("nav-transparent")
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
						a.addEventListener("animationend", function g() {
							a.classList.remove.apply(a.classList, $jscomp.arrayFromIterable(d));
							a.removeEventListener("animationend", g)
						});
						b.unobserve(a)
					}
				})
			});
			b.observe(a)
		})
	} catch(b) {
		console.error(b)
	}

	/* countdown */
	try {
		var dateEnd = new Date();
		dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
		dateEnd.setHours(0, 0, 0);
		var countdown = new LightCountdown(".countdown-week", dateEnd, {animation: "animated flipInX", animationDuration: "600ms"});
	} catch (e) {
		console.error(e);
	}

});