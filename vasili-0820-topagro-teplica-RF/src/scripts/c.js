$(document).ready(function () {
    // Calculator
    $("form.has-calculator").change(function () {
        var form = this;

        var product = $("input[name='product']", form).val();
        var length = $("input[name='length']:checked", form).val();

        var sum = 0;

        sum += calculator.products[product][length];

        var animateBlock = $('.catalog__card__price', form);
        var out = $('.calculator-price', form);
        var outOld = $('.calculator-price-old', form);

        var animationName = 'pulse';
        animateBlock.addClass('animated faster ' + animationName);
        animateBlock.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){animateBlock.removeClass('animated faster ' + animationName)});

        var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;

        $({ animateNumber: animateFrom }).animate({ animateNumber: sum }, {
            duration: 800,
            step: function (animateNumber){
                animateNumber = Number(animateNumber).toFixed();
                out.text(Number(animateNumber).toFixed());
                outOld.text(Number(animateNumber / 0.5).toFixed())
            },
            complete: function() {
                out.data("animateFrom", Number(sum).toFixed(2))
            }
        });
    });
    $("form.has-calculator").change();
});