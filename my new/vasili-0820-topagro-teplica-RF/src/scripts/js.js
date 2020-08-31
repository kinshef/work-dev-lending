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

    $("#navToggle").click(function () {
        $(this).toggleClass("active"), $(".overlay").toggleClass("open"), $("body").toggleClass("locked")
    }), $("[role=\"menuitem\"]").click(function () {
        $("#navToggle").removeClass("active"), $(".overlay").toggleClass("open"), $("body").toggleClass("locked")
    })

    $("a.smoothscroll").click(function(a) {
        "" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
            scrollTop: $(a).offset().top
        }, 400))
    });

});
document.addEventListener("DOMContentLoaded", function () {

    try {
		[].forEach.call(document.querySelectorAll("[data-animation]"), function(a) {
			var b = new IntersectionObserver(function(c) {
				c.forEach(function(c) {
					if(c.isIntersecting) {
						var d = a.dataset.animation.split(" ");
						a.classList.add.apply(a.classList, $jscomp.arrayFromIterable(d));
						a.addEventListener("animationend", function e() {
							a.classList.remove.apply(a.classList, $jscomp.arrayFromIterable(d));
							a.removeEventListener("animationend", e)
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
    // try {
    //     var dateEnd = new Date();
    //     dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
    //     dateEnd.setHours(0, 0, 0);
    //     var countdown = new LightCountdown(".countdown-week", dateEnd, {animation: "animated flipInX", animationDuration: "600ms"});
    // } catch (e) {console.error(e);}

});












