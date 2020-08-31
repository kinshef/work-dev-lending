$(document).ready(function () {

    $("form.has-calculator").change(function () {
        var form = this;
        var product = $("input[name='product']:checked", form).val();
        var additional = $("input[name='additional[]']:checked", form);
        var sum = 0;
        sum += calculatorData.products[product].price;

        additional.each(function (i, e) {
            sum += calculatorData.additional[$(e).val()].price
        });

        var animateBlock = $('.catalog__price', form);
        var out = $('.js-price', form);
        var outOld = $('.js-price-old', form);

        var animationName = 'pulse';
        animateBlock.addClass('animated faster ' + animationName);
        animateBlock.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){animateBlock.removeClass('animated faster ' + animationName)});

        var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;

        $(".js-input-order-price", this).val(Number(out).toFixed(2));

        $({ animateNumber: animateFrom }).animate({ animateNumber: sum }, {
            duration: 800,
            step: function (animateNumber){
                out.text(Number(animateNumber).toFixed(2));
                outOld.text(Number(animateNumber * 1.27).toFixed(2))
            },
            complete: function() {
                out.data("animateFrom", Number(sum).toFixed())
            }
        });

        animateFrom = $(".js-calculator-table", this);
        var f = '<tr><th scope="row">1</th><td>' + calculatorData.products[product].name + '</td><td class="text-right">' + calculatorData.products[product].price + " руб.</td></tr>";
        additional.each(function (a, c) {
            var b = calculatorData.additional[$(c).val()];
            f += '<tr><th scope="row">' + (a + 2) + "</th><td>" + b.name + '</td><td class="text-right">' +
                b.price + " \u0440\u0443\u0431.</td></tr>"
        });
        animateFrom.html(f)

    });
    $("form.has-calculator").change();

});