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
	$("form").submit(function(a) {
		a.preventDefault();
		if("undefined" !== typeof sessionStorage)
			if(sessionStorage.getItem("formSubmitted")) {
				if(!confirm("\u0412\u044b \u0443\u0436\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u0437\u0430\u044f\u0432\u043a\u0443, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c?")) return !1
			} else sessionStorage.setItem("formSubmitted", "true");
		a = $(this).serializeArray();
		a.push({
			name: "source",
			value: "Ger"
		});
		a.push({
			name: "title",
			value: "\u041a\u043e\u0441\u0430"
		});
		a.push({
			name: "link",
			value: location.href
		});
		$.ajax({
			type: "POST",
			url: "https://skidka-tut.by/action/index.php",
			headers: {
				"X-Requested-With": "XMLHttpRequest"
			},
			dataType: "json",
			data: a
		}).done(function(a) {
			alert(a.text)
		}).fail(function(a, c) {
			console.log(a, c);
			alert("\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u043c \u043f\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443!")
		});
		"function" === typeof Event ? document.dispatchEvent(new Event("app.form.send")) : (a = document.createEvent("Event"), a.initEvent("app.form.send", !1, !1), document.dispatchEvent(a));
		return !1
	});
	$(".modal").on("shown.bs.modal", function() {
		window.location.hash = "modal"
	});
	$(".modal").on("hide.bs.modal", function(a) {
		"#modal" === window.location.hash && history.replaceState(null, null, " ")
	});
	$(window).on("hashchange", function(a) {
		"#modal" !== window.location.hash && $(".modal").modal("hide")
	});
	$("body").mouseleave(function(a) {
		"undefined" !== typeof sessionStorage && !sessionStorage.getItem("modalLeaveShowed") && -12 > a.clientY && (sessionStorage.setItem("modalLeaveShowed", "true"), $("#modal-leave").modal("show"))
	});
	$(".smoothscroll").click(function(a) {
		"" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
			scrollTop: $(a).offset().top
		}, 400))
	})
});
document.addEventListener("DOMContentLoaded", function() {
	try {
		var a = document.querySelectorAll(".filter__buttons .filter__button__custom");
		[].forEach.call(a, function(a) {
			a.addEventListener("click", function() {
				var c = a.closest(".filter__buttons__group");
				Array.prototype.forEach.call(c.querySelectorAll(".filter__button__custom"), function(a) {
					a.classList.remove("active")
				});
				a.classList.add("active");
				[].forEach.call(document.querySelectorAll("#filter .has-calculator"), function(c) {
					c.querySelector("input[name='" + a.dataset.name + "'][value='" + a.dataset.value + "']").checked = !0;
					c.dispatchEvent(new Event("change"))
				})
			})
		})
	} catch(c) {
		console.error(c)
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
	} catch(c) {
		console.error(c)
	}
	try {
		var b = new Date;
		b.setDate(b.getDay() ? b.getDate() - b.getDay() + 8 : b.getDate() + 1);
		b.setHours(0, 0, 0);
		new LightCountdown(".countdown-week", b, {
			animation: "animated flipInX"
		})
	} catch(c) {
		console.error(c)
	}
});