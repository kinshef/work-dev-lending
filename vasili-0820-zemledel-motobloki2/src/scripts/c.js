$(document).ready(function() {

	$("form.has-calculator").change(function () {
        var form = this;
        var product = $("input[name='product']", form).val();
        var option = $("input[name='option']:checked", form).val();
        var sum = 0;
        
        sum += calculatorData.product[product][option][0];

        var animateBlock = $('.catalog__price', form);

        var animationName = 'rubberBand';
        animateBlock.addClass('animated faster ' + animationName);
        animateBlock.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            animateBlock.removeClass('animated faster ' + animationName)
        });


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



        if(calculatorData.product[product][option][1] !== $('.jEngine', form).text()){
            $('.jEngine', form).text(calculatorData.product[product][option][1])
        };


        var sumPower = calculatorData.product[product][option][2];
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





        // var sumShina = calculatorData.product[product][power][1];
        // var tankVolume = $('.jShina', form);
        // var animateFromShina = tankVolume.data("animateFromShina") > 0 ? tankVolume.data("animateFromShina") : 0;
        // $({ animateNumber: animateFromShina }).animate({ animateNumber: sumShina }, {
        //     duration: 800,
        //     step: function (animateNumber){
        //         tankVolume.text(Number(animateNumber).toFixed());
        //     },
        //     complete: function() {
        //         tankVolume.data("animateFromShina", Number(sumShina).toFixed());
        //     }
        // });


        calculatorData.product[product][option][5].forEach(function(item, index){
            var sumKolGear = item;
            var kolGear = $('.jKolGear'+index, form);
            var animateFromKolGear = kolGear.data("animateFromKolGear") > 0 ? kolGear.data("animateFromKolGear") : 0;

            $({ animateNumber: animateFromKolGear }).animate({ animateNumber: sumKolGear }, {
                duration: 800,
                step: function (animateNumber){
                    kolGear.text(Number(animateNumber).toFixed());
                },
                complete: function() {
                    kolGear.data("animateFromKolGear", Number(sumKolGear).toFixed());
                }
            });
        })


        var equipment = calculatorData.product[product][option][10];
        if(equipment !== $('.jEquipment', form).text()){
            $('.jEquipment', form).text(equipment.join(', '))
        };



        // var sumShina = calculatorData.product[product][power][1];
        // var shina = $('.jShina', form);
        // var animateFromShina = shina.data("animateFromShina") > 0 ? shina.data("animateFromShina") : 0;
        // $({ animateNumber: animateFromShina }).animate({ animateNumber: sumShina }, {
        //     duration: 800,
        //     step: function (animateNumber){
        //         shina.text(Number(animateNumber).toFixed());
        //     },
        //     complete: function() {
        //         shina.data("animateFromShina", Number(sumShina).toFixed());
        //     }
        // });

        // var sumShag = calculatorData.product[product][power][2];
        // var shag = $('.jShag', form);
        // var animateFromShag = shag.data("animateFromShag") > 0 ? shag.data("animateFromShag") : 0;
        // $({ animateNumber: animateFromShag }).animate({ animateNumber: sumShag }, {
        //     duration: 800,
        //     step: function (animateNumber){
        //         shag.text(Number(animateNumber).toFixed(1));
        //     },
        //     complete: function() {
        //         shag.data("animateFromShag", Number(sumShag).toFixed(1));
        //     }
        // });

        // var sumWeight = calculatorData.product[product][power][3];
        // var weight = $('.jWeight', form);
        // var animateFromWeight = weight.data("animateFromWeight") > 0 ? weight.data("animateFromWeight") : 0;
        // $({ animateNumber: animateFromWeight }).animate({ animateNumber: sumWeight }, {
        //     duration: 800,
        //     step: function (animateNumber){
        //         weight.text(Number(animateNumber).toFixed(1));
        //     },
        //     complete: function() {
        //         weight.data("animateFromWeight", Number(sumWeight).toFixed(1));
        //     }
        // });

  });
  $("form.has-calculator").change();

});


