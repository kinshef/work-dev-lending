$(document).ready(function () {
    // Calculator
    $("form.has-calculator").change(function () {
        var form = this;

        var product = $("input[name='product']", form).val();
        var power = $("input[name='power']:checked", form).val();
        var count = $("input[name='count']", form).val();
        var sum = 0;

        sum += +calculator[product][power] * count;

        var out = $('.calculator-price', form);
        var outOld = $('.calculator-price-old', form);

        var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;

        $({ animateNumber: animateFrom }).animate({ animateNumber: sum }, {
            duration: 800,
            step: function (animateNumber){
                out.text(Number(animateNumber).toFixed());
                outOld.text(Number(animateNumber * 1.27).toFixed())
            },
            complete: function() {
                out.data("animateFrom", Number(sum).toFixed())
            }
        });
    });
    $("form.has-calculator").change();
});