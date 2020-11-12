$(document).ready(function() {

	$("form.has-calculator").change(function () {
        var form = this;
        var product = $("input[name='product']", form).val();
        var option = $("input[name='option']:checked", form).val();


        var animateBlock = $('.catalog__price', form);
        var animationName = 'flash';
        animateBlock.addClass('animated faster ' + animationName);
        animateBlock.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            animateBlock.removeClass('animated faster ' + animationName)
        });


        var sum = 0;
        sum += calculatorData.product[product][option][0];
        var out = $('.jPrice', form);
        var outOld = $('.jPriceOld', form);
        var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;
        $({ animateNumber: animateFrom }).animate({ animateNumber: sum }, {
            duration: 800,
            step: function (animateNumber){
                out.text(Number(animateNumber).toFixed());
                outOld.text(Number(animateNumber * 1.4).toFixed());
            },
            complete: function() {
                out.data("animateFrom", Number(sum).toFixed());
            }
        });

        var sumPower = calculatorData.product[product][option][1];
        var pow = $('.jPower', form);
        var animateFromPow = pow.data("animateFromPow") > 0 ? pow.data("animateFromPow") : 0;
        $({ animateNumber: animateFromPow }).animate({ animateNumber: sumPower }, {
            duration: 800,
            step: function (animateNumber){
                pow.text(Number(animateNumber).toFixed());
            },
            complete: function() {
                pow.data("animateFromPow", Number(sumPower).toFixed());
            }
        });

        var sumVes = calculatorData.product[product][option][2];
        var ves = $('.jVes', form);
        var animateFromVes = ves.data("animateFromVes") > 0 ? ves.data("animateFromVes") : 0;
        $({ animateNumber: animateFromVes }).animate({ animateNumber: sumVes }, {
            duration: 800,
            step: function (animateNumber){
                ves.text(Number(animateNumber).toFixed());
            },
            complete: function() {
                ves.data("animateFromVes", Number(sumVes).toFixed());
            }
        });

  });
  $("form.has-calculator").change();

});


