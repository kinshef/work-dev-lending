$(document).ready(function () {
  $("form.has-calculator").change(function () {
    var product = $("input[name='product']", this).val();
    var shag = $("input[name='interval']:checked", this).val();
    var length = $("input[name='length']:checked", this).val();
    var price = $(".catalog__card__price", this);
    var sum = 0;

    sum += calculator.products[product][shag][length];

    price.addClass("animated faster pulse");
    price.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        price.removeClass("animated faster pulse")
      });
    product = 0 < price.data("animateFrom") ? price.data("animateFrom") : 0;
    $({ animateNumber: product }).animate({ animateNumber: sum }, {
      duration: 800, step: function (step) {
        price.text(Number(step).toFixed());
      }, complete: function () {
        var result = Number(sum).toFixed();
        price.data("animateFrom", result);
        price.text(result);
      }
    })
  });
  $("form.has-calculator").change()
});
