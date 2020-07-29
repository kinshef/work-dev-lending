$(document).ready(function() {
// Calculator
	$("form.has-calculator").change(function () {
    var form = this;
    var product = $("input[name='product']", form).val();
    var length = $("input[name='length']:checked", form).val();
    var sum = 0;

	sum += calculatorData[product][length];
  var out = $('.jPrice', form);
  var outOld = $('.jPriceOld', form);

	var animateFrom = 0 < out.data("animateFrom") ? out.data("animateFrom") : 0;


    $({ animateNumber: animateFrom }).animate({ animateNumber: sum }, {
      duration: 800,
      step: function (animateNumber){
        out.text(Number(animateNumber).toFixed());
        outOld.text(Number(animateNumber * 2).toFixed())
      },
      complete: function() {
        out.data("animateFrom", Number(sum).toFixed())
      }
    });

	});
	$("form.has-calculator").change();

});