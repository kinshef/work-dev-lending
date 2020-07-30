$(document).ready(function() {
    // Calculator
    $("form.has-calculator").change(function () {
        var form = this;
        var product = $("input[name='product']", form).val();
        var length = $("select[name='length']", form).val();
        var weight = $("select[name='weight']", form).val();
        var color = $("select[name='color']", form).val();
        var additional = $("input[name='additional[]']:checked", form);
        var sum = 0;

        sum += calculatorData.product[product][length][weight][color];

        additional.each(function (i, e) {
            sum += calculatorData.additional[$(e).val()]
        });

        var animateBlock = $('.catalog__price', form);
        var out = $('.jPrice', form);
        var outOld = $('.jPriceOld', form);

        var animationName = 'pulse';
        animateBlock.addClass('animated faster ' + animationName);
        animateBlock.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){animateBlock.removeClass('animated faster ' + animationName)});

        var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;

        $({ animateNumber: animateFrom }).animate({ animateNumber: sum }, {
            duration: 800,
            step: function (animateNumber){
                out.text(Number(animateNumber).toFixed() + ' руб.');
                outOld.text(Number(animateNumber * 1.3).toFixed() + ' руб.')
            },
            complete: function() {
                out.data("animateFrom", Number(sum).toFixed())
            }
        });
    });
    $("form.has-calculator").change();

});
