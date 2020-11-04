$(document).ready(function() {

	$("form.has-calculator").change(function () {
      var form = this;
      var product = $("input[name='product']", form).val();
      var length = $("input[name='length']:checked", form).val();
      var tolshchina = $("input[name='tolshchina']:checked", form).val();
      var sum = 0;
      
      sum += calculatorData[product][length][tolshchina];

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
  });
  $("form.has-calculator").change();

});




