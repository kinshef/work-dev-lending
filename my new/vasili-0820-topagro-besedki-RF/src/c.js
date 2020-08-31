$(document).ready(function () {
  // Calculator
  $("form.has-calculator").change(function () {
    var form = this;
    var product = $("input[name='product']", form).val();
    var length = $("input[name='length']:checked", form).val();
    var dop = $("input[name='dop']:checked", form).val();
    var sum = 0;

    sum += calculatorData.product[product][length][dop];
    var out = $('.jPrice', form);
    var outOld = $('.jPriceOld', form);

    var animateFrom1 = 0 < out.data("animateFrom") ? out.data("animateFrom") : 0;


    $({
      animateNumber: animateFrom1
    }).animate({
      animateNumber: sum
    }, {
      duration: 800,
      step: function (animateNumber) {
        out.text(Number(animateNumber).toFixed() + " руб.");
        outOld.text(Number(animateNumber * 1.27).toFixed() + " руб.")
      },
      complete: function () {
        out.data("animateFrom", Number(sum).toFixed())
      }
    });

  });
  $("form.has-calculator").change();
});