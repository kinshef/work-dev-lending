$(document).ready(function() {

	$("form.has-calculator").change(function () {
        var form = this;
        var product = $("input[name='product']", form).val();
        var length = $("input[name='length']:checked", form).val();
        var param1 = $("input[name='param1'][type='hidden'], input[name='param1']:checked", form).val();
        var additional = $("input[name='additional[]']:checked", form);
        var sum = 0;
        
        sum += calculator.products[product][length][param1];

        additional.each(function (i, e) {
            sum += calculator.additional[$(e).val()]
        });

        var animationName = 'pulse';
        animateBlock.addClass('animated faster ' + animationName);
        animateBlock.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){animateBlock.removeClass('animated faster ' + animationName)});

        var out = $('.calculator-price', form);
        var outOld = $('.calculator-price-old', form);
        var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;

        var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;

        $({ animateNumber: animateFrom }).animate({ animateNumber: sum }, {
            duration: 800,
            step: function (animateNumber){
                out.text(Number(animateNumber).toFixed());
                outOld.text(Number(animateNumber * 1.27).toFixed());
            },
            complete: function() {
                out.data("animateFrom", Number(sum).toFixed());
            }
        });
  });
  $("form.has-calculator").change();

});




