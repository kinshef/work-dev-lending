$(document).ready(function() {
    $("form.has-calculator").change(function () {
        var form = this;

        var product = $("input[name='product']", form).val();
        var moschnost = $("input[name='moschnost']:checked", form).val();
        var additional = $("input[name='additional[]']:checked", form);

        var sum = 0;

        sum += calculator.products[product][moschnost].price;

        additional.each(function (i, e) {
            sum += calculator.additional[$(e).val()]
        });

        var animateBlock = $('.catalog__price', form);
        var out = $('.calculator-price', form);
        var outOld = $('.calculator-price-old', form);

        var animationName = 'pulse';
        animateBlock.addClass('animated faster ' + animationName);
        animateBlock.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            animateBlock.removeClass('animated faster ' + animationName)
        });

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

        var sumVes = calculator.products[product][moschnost].ves;
		var ves = $('.jVes', form);
		var animateFromVes = ves.data("animateFromVes") > 0 ? ves.data("animateFromVes") : 0;
		$({ animateNumber: animateFromVes }).animate({ animateNumber: sumVes }, {
			duration: 800,
			step: function (animateNumber){
				ves.text(Number(animateNumber).toFixed(2));
			},
			complete: function() {
				ves.data("animateFromVes", Number(sumVes).toFixed(2));
			}
		});


        var sumPokritie = calculator.products[product][moschnost].pokritie;
		var pokritie = $('.jPokritie', form);
		var animateFromPokritie = pokritie.data("animateFromPokritie") > 0 ? pokritie.data("animateFromPokritie") : 0;
		$({ animateNumber: animateFromPokritie }).animate({ animateNumber: sumPokritie }, {
			duration: 800,
			step: function (animateNumber){
				pokritie.text(Number(animateNumber).toFixed());
			},
			complete: function() {
				pokritie.data("animateFromPokritie", Number(sumPokritie).toFixed());
			}
		});

        var sumRashod = calculator.products[product][moschnost].rashod;
		var rashod = $('.jRashod', form);
		var animateFromRashod = rashod.data("animateFromRashod") > 0 ? rashod.data("animateFromRashod") : 0;
		$({ animateNumber: animateFromRashod }).animate({ animateNumber: sumRashod }, {
			duration: 800,
			step: function (animateNumber){
				rashod.text(Number(animateNumber).toFixed());
			},
			complete: function() {
				rashod.data("animateFromRashod", Number(sumRashod).toFixed());
			}
		});

    });
	$("form.has-calculator").change()
});
