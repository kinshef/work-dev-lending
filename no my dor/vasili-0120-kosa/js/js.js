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
            value: "Agronext"
        });
        data.push({
            name: "title",
            value: "Теплица"
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
	try {
		var dateEnd = new Date();
    dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
    dateEnd.setHours(0, 0, 0);
		var countdown = new LightCountdown(".countdown-week", dateEnd, {
			animation: "animated flipInX",
			animationDuration: "600ms"
		});
	} catch(e) {
		console.error(e)
	}

});