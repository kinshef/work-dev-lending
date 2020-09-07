$(document).ready(function () {
    $("form").submit(function (b) {
        if (b.preventDefault(), "undefined" != typeof sessionStorage)
            if (!sessionStorage.getItem("formSubmitted")) sessionStorage.setItem("formSubmitted", "true");
            else if (!confirm("\u0412\u044B \u0443\u0436\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0437\u0430\u044F\u0432\u043A\u0443, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C?")) return !1;
        b = $(this).serializeArray(), b.push({
            name: "subject",
            value: "\u0422\u0435\u043F\u043B\u0438\u0446\u0430"
        }), b.push({
            name: "site",
            value: "agrocatalog.by"
        }), b.push({
            name: "link",
            value: location.href
        }), $.ajax({
            type: "POST",
            url: "https://skidka-tut.by/mail/ajax.php",
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            dataType: "json",
            data: b
        }).done(function (b) {
            alert(b.text)
        }).fail(function (b, a) {
            console.log(b, a), alert("\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430. \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443!")
        });
        try {
            ym(47791231, "reachGoal", "form_send")
        } catch (a) {
            console.error(a)
        }
        return !1
    }), $("body").mouseleave(function (b) {
        "undefined" != typeof sessionStorage && !sessionStorage.getItem("modalLeaveShowed") && -12 > b.clientY && (sessionStorage.setItem("modalLeaveShowed", "true"), $("#modal-leave").modal("show"))
    }), $(".smoothscroll").click(function (b) {
        "" !== this.hash && (b.preventDefault(), b = this.hash, $("html, body").animate({
            scrollTop: $(b).offset().top - 100
        }, 400))
    });
    var b = $(".owl-carousel-advantages").owlCarousel({
        items: 1,
        nav: !0,
        loop: !0,
        dots: !0,
        navText: ["<i class=\"fa fa-lg fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-lg fa-angle-right\" aria-hidden=\"true\"></i>"]
    });
    b.on("changed.owl.carousel", function (c) {
        for (var a = 0; a < c.page.size; a++) $(".advantages-slader-dot").removeClass("active");
        $(".advantages-slader-dot:nth-child(" + (c.page.index + 1) + ")").addClass("active")
    }), $(".advantages-slader-dot").click(function (c) {
        for (var a = 0; a < $(".advantages-slader-dot").length; a++) $(".advantages-slader-dot")[a] === c.target && $(".owl-carousel-advantages").trigger("to.owl.carousel", a)
    });
    var b = $(".owl-carousel-catalog").owlCarousel({
            items: 1,
            nav: !0,
            loop: !0,
            dots: !0,
            autoHeight: !0,
            navText: ["<i class=\"fa fa-2x fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-2x fa-angle-right\" aria-hidden=\"true\"></i>"]
        }),
        b = $(".owl-carousel-reviews").owlCarousel({
            items: 1,
            nav: !0,
            loop: !0,
            dots: !0,
            margin: 5,
            autoHeight: !0,
            navText: ["<i class=\"fa fa-lg fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-lg fa-angle-right\" aria-hidden=\"true\"></i>"]
        }),
        b = $(".owl-carousel-photo").owlCarousel({
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 50
                },
                720: {
                    items: 1,
                    stagePadding: 100
                },
                1e3: {
                    items: 2,
                    stagePadding: 150
                }
            },
            nav: !0,
            loop: !0,
            dots: !0,
            margin: 20,
            autoHeight: !0,
            navText: ["<i class=\"fa fa-lg fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-lg fa-angle-right\" aria-hidden=\"true\"></i>"]
        })
}), document.addEventListener("DOMContentLoaded", function () {
    try {
        var b = new Date;
        b.setDate(b.getDay() ? b.getDate() - b.getDay() + 8 : b.getDate() + 1), b.setHours(0, 0, 0), new LightCountdown(".countdown-week", b, {
            animation: "animated flipInX",
            animationDuration: "600ms"
        })
    } catch (a) {
        console.error(a)
    }
});