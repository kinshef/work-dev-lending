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


        var sumTankVolume = calculatorData.product[product][option][3];
        var tankVolume = $('.jTankVolume', form);
        var animateFromTankVolume = tankVolume.data("animateFromTankVolume") > 0 ? tankVolume.data("animateFromTankVolume") : 0;
        $({ animateNumber: animateFromTankVolume }).animate({ animateNumber: sumTankVolume }, {
            duration: 800,
            step: function (animateNumber){
                tankVolume.text(Number(animateNumber).toFixed());
            },
            complete: function() {
                tankVolume.data("animateFromTankVolume", Number(sumTankVolume).toFixed());
            }
        });


        if(calculatorData.product[product][option][4] !== $('.jPrivod', form).text()){
            $('.jPrivod', form).text(calculatorData.product[product][option][4])
        };


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



        var sumRaskhod = calculatorData.product[product][option][6];
        var raskhod = $('.jRaskhod', form);
        var animateFromRaskhod = raskhod.data("animateFromRaskhod") > 0 ? raskhod.data("animateFromRaskhod") : 0;
        $({ animateNumber: animateFromRaskhod }).animate({ animateNumber: sumRaskhod }, {
            duration: 800,
            step: function (animateNumber){
                raskhod.text(Number(animateNumber).toFixed(1));
            },
            complete: function() {
                raskhod.data("animateFromRaskhod", Number(sumRaskhod).toFixed(1));
            }
        });


        calculatorData.product[product][option][7].forEach(function(item, index){
            var sumShirinaObr = item;
            var shirinaObr = $('.jShirinaObr'+index, form);
            var animateFromShirinaObr = shirinaObr.data("animateFromShirinaObr") > 0 ? shirinaObr.data("animateFromShirinaObr") : 0;

            $({ animateNumber: animateFromShirinaObr }).animate({ animateNumber: sumShirinaObr }, {
                duration: 800,
                step: function (animateNumber){
                    shirinaObr.text(Number(animateNumber).toFixed());
                },
                complete: function() {
                    shirinaObr.data("animateFromShirinaObr", Number(sumShirinaObr).toFixed());
                }
            });
        })


        calculatorData.product[product][option][8].forEach(function(item, index){
            var sumGlubinaObr = item;
            var glubinaObr = $('.jGlubinaObr'+index, form);
            var animateFromGlubinaObr = glubinaObr.data("animateFromGlubinaObr") > 0 ? glubinaObr.data("animateFromGlubinaObr") : 0;

            $({ animateNumber: animateFromGlubinaObr }).animate({ animateNumber: sumGlubinaObr }, {
                duration: 800,
                step: function (animateNumber){
                    glubinaObr.text(Number(animateNumber).toFixed());
                },
                complete: function() {
                    glubinaObr.data("animateFromGlubinaObr", Number(sumGlubinaObr).toFixed());
                }
            });
        })


        calculatorData.product[product][option][9].forEach(function(item, index){
            var sumRazmKoles = item;
            var razmKoles = $('.jRazmKoles'+index, form);
            var animateFromRazmKoles = razmKoles.data("animateFromRazmKoles") > 0 ? razmKoles.data("animateFromRazmKoles") : 0;

            $({ animateNumber: animateFromRazmKoles }).animate({ animateNumber: sumRazmKoles }, {
                duration: 800,
                step: function (animateNumber){
                    razmKoles.text(Number(animateNumber).toFixed());
                },
                complete: function() {
                    razmKoles.data("animateFromRazmKoles", Number(sumRazmKoles).toFixed());
                }
            });
        })


        var equipment = calculatorData.product[product][option][10];
        if(equipment !== $('.jEquipment', form).text()){
            $('.jEquipment', form).text(equipment.join(', '))
        };


        var sumVes = calculatorData.product[product][option][11];
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


        if(calculatorData.product[product][option][12] !== $('.jUrmImg', form).attr('src')){
            $('.jUrmImg', form).attr('src', calculatorData.product[product][option][12]);
        };

        if(calculatorData.product[product][option][13] !== $('.jBox', form).text()){
            $('.jBox', form).text(calculatorData.product[product][option][13])
        };

        if(calculatorData.product[product][option][14] !== $('.jFara', form).text()){
            $('.jFara', form).text(calculatorData.product[product][option][14])
        };


  });
  $("form.has-calculator").change();

});


