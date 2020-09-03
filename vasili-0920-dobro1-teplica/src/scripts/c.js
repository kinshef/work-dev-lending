$(document).ready(function() {

	$("form.has-calculator").change(function () {
        var form = this;
        var product = $("input[name='product']", form).val();
        var shag = $("input[name='interval']:checked", form).val();
        var length = $("input[name='length']:checked", form).val();
        var sum = 0;
        
        sum += calculator.products[product][shag][length];

        var price = $(".catalog__card__price", this);
        var out = $('.calculator-price', form);
        var outOld = $('.calculator-price-old', form);
        var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;

        price.addClass("animated faster pulse");
        price.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
            price.removeClass("animated faster pulse")
        });

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




