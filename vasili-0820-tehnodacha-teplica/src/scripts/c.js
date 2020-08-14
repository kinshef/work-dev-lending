$(document).ready(function() {
	$("form.has-calculator").change(function () {
        var form = this;
        var product = $("input[name='product']", form).val();
        var option = $("input[name='option']:checked", form).val();

        Object.keys(calculatorData[product][option]).forEach(function(elem){
            Object.keys(calculatorData[product][option][elem]).forEach(function(elem2){
                var sum = 0;
                sum += calculatorData[product][option][elem][elem2];


                $("ul.shag"+elem+" .length-"+elem2, form).removeAttr("style")
                if(typeof(sum) === 'string'){
                    $("ul.shag"+elem+" .length-"+elem2, form).css('color', 'red');
                }




                var out = $("ul.shag"+elem+" .length-"+elem2, form);
                var outOld = $('.jPriceOld', form);
                var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;

                $({ animateNumber: animateFrom }).animate({ animateNumber: sum }, {
                    duration: 800,
                    step: function (animateNumber){
                        
                        out.text(Number(animateNumber).toFixed() + " руб.");
                        outOld.text(Number(animateNumber * 1.4).toFixed() + " руб.");
                    },
                    complete: function() {
                        out.data("animateFrom", Number(sum).toFixed());
                    }
                });
            })
        })
    });
    $("form.has-calculator").change();

});




