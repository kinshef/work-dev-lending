$(document).ready(function() {

	$("form.dop-calculator").change(function () {
      var form = this;
      var product = $("input[name='product']", form).val();
      var model = $("input[name='model']:checked", form).val();
      var sum = 0;
      
      sum += calculatorData[product][model];

      var out = $('.jPrice', form);
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
  });
  $("form.dop-calculator").change();

});


