$(document).ready(function () {
    $("form.has-calculator").change(function () {
        var a = $("input[name='product']", this).val(),
            d = $("input[name='length']:checked", this).val(),
            e = $("input[name='interval']:checked", this).val(),
            f = $("input[name='additional[]']:checked", this),
            c = 0;
        c += calculator.products[a][d][e];
        f.each(function (b, a) {
            c += calculator.additional[$(a).val()]
        });
        var b = $(".jPrice", this),
            g = $(".jPriceOld", this);
        a = 0 < b.data("animateFrom") ? b.data("animateFrom") : 0;
        $({
            animateNumber: a
        }).animate({
            animateNumber: c
        }, {
            duration: 800,
            step: function (a) {
                b.text(Number(a).toFixed() + " \u0440\u0443\u0431.");
                g.text(Number(2 * a).toFixed() + " \u0440\u0443\u0431.")
            },
            complete: function () {
                b.data("animateFrom", Number(c).toFixed())
            }
        })
    });
    $("form.has-calculator").change()
});