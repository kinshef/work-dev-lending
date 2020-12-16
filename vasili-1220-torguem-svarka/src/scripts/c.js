$(document).ready(function() {

	$("form.has-calculator").change(function () {
        var form = this;
        var product = $("input[name='product']", form).val();
        var length = $("input[name='length']:checked", form).val();
        var param1 = $("input[name='param1'][type='hidden'], input[name='param1']:checked", form).val();
        var sum = 0;
        
        sum += calculator.products[product][length][param1];

        var additional = $("input[name='additional[]']:checked", form);
        additional.each(function (i, e) {
            sum += calculator.additional[$(e).val()]
        });

        var animateBlock = $('.catalog__price', form);
        var animationName = 'pulse';
        animateBlock.addClass('animated faster ' + animationName);
        animateBlock.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd animationend animationend', function(){animateBlock.removeClass('animated faster ' + animationName)});

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


        if(calculator.products[product][length]['urlImg'] !== $('.jUrmImg', form).attr('src')){
            $('.jUrmImg', form).attr('src', calculator.products[product][length]['urlImg']);
        };

  });
  $("form.has-calculator").change();

});




