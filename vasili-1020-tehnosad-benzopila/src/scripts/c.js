$(document).ready(function() {
    // Calculator
    $("form.has-calculator").change(function () {
        var form = this;
		
        var product = $("input[name='product']", form).val();
        var power = $("input[name='power']:checked", form).val();
        var additional = $("input[name='additional[]']:checked", form);
		var animateBlock = $('.catalog__price', form);
        var out = $('.calculator-price', form);
        var outOld = $('.calculator-price-old', form);
        var sum = 0;

        sum += calculator.products[product][power];

        additional.each(function (i, e) {
            sum += calculator.additional[$(e).val()]
        });

        var animationName = 'pulse';
        animateBlock.addClass('animated faster ' + animationName);
        animateBlock.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){animateBlock.removeClass('animated faster ' + animationName)});

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




