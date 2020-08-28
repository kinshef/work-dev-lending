$(document).ready(function () {

    $("form.has-calculator").change(function () {
        var form = this;

        var product = $("input[name='product']", form).val();
        var length = $("input[name='length']:checked", form).val();
        var interval = $("input[name='interval']:checked", form).val();
        var shirina = $("input[name='shirina']:checked", form).val();
        var stringery = $("input[name='stringery']:checked", form).val();
        var profil = $("input[name='profil']:checked", form).val();
        var kreplenie = $("input[name='kreplenie']:checked", form).val();
        var additional = $("input[name='additional[]']:checked", form);

        var sum = 0;

        var imgPath = function(path){
            $(".has-calculator__img img", form).attr('src', path['img']);
            $(".has-calculator__img a", form).attr('href', path['img'])
        }

        if(!stringery){
            if($("input[name='shirina']", form).length > 1){
                sum += calculator.products[product][length][interval][shirina]['prise'];
                imgPath(calculator.products[product][length][interval][shirina]);

            }else{
                sum += calculator.products[product][length][interval]['prise'];
                imgPath(calculator.products[product][length][interval]);
            }
        }else{
            sum += calculator.products[product][length][interval][stringery][profil][kreplenie]['prise'];
            imgPath(calculator.products[product][length][interval][stringery][profil][kreplenie]);
        }

        additional.each(function (i, e) {
            sum += calculator.additional[$(e).val()]
        });

        var animateBlock = $('.catalog__price', form);
        var out = $('.calculator-price', form);
        var outOld = $('.calculator-price-old', form);


        var animationName = 'pulse';
        animateBlock.addClass('animated faster ' + animationName);
        animateBlock.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){animateBlock.removeClass('animated faster ' + animationName)});

        var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;

        $({ animateNumber: animateFrom }).animate({ animateNumber: sum }, {
            duration: 800,
            step: function (animateNumber){
                out.text(Number(animateNumber).toFixed());

                outOld.text(Number(animateNumber / .7).toFixed())
            },
            complete: function() {
                out.data("animateFrom", Number(sum).toFixed())
            }
        });
    });
    $("form.has-calculator").change();
});