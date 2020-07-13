$(document).ready(function() {

	$("form.has-calculator").change(function () {
		var form = this;
		var product = $("input[name='product']", form).val();
		var displacement = $("input[name='displacement']:checked", form).val();
		var sum = 0;
		
		sum += calculator.products[product][displacement][0];
		
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

		var sumPower = calculator.products[product][displacement][1];
		var power = $('.jPower', form);
		var animateFromPower = power.data("animateFromPower") > 0 ? power.data("animateFromPower") : 0;
		$({ animateNumber: animateFromPower }).animate({ animateNumber: sumPower }, {
			duration: 800,
			step: function (animateNumber){
				power.text(Number(animateNumber).toFixed(2));
			},
			complete: function() {
				power.data("animateFromPower", Number(sumPower).toFixed(2));
			}
		});

		var sumWeight = calculator.products[product][displacement][2];
		var weight = $('.jWeight', form);
		var animateFromWeight = weight.data("animateFromWeight") > 0 ? weight.data("animateFromWeight") : 0;
		$({ animateNumber: animateFromWeight }).animate({ animateNumber: sumWeight }, {
			duration: 800,
			step: function (animateNumber){
				weight.text(Number(animateNumber).toFixed(1));
			},
			complete: function() {
				weight.data("animateFromWeight", Number(sumWeight).toFixed(1));
			}
		});
	});
	$("form.has-calculator").change();
	

















}

);