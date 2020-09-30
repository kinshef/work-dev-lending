$(document).ready(function () {

    $("form.has-calculator").change(function (e) {
        var form = this;

        var product = $("input[name='product']", form).val();
        var length = $("input[name='length']:checked", form).val();
        var interval = $("input[name='interval']:checked", form).val();
        var shirina = $("input[name='shirina']:checked", form).val();
        var stringery = $("input[name='stringery']:checked", form).val();
        var profil = $("input[name='profil']:checked", form).val();
        var additional = $("input[name='additional[]']:checked", form);

        if((e.target.value === '20' && e.target.name === 'hiden') || (e.target.value === '1' && e.target.name === 'interval')){
            $("input[name='hiden'][value='20']", form).prop('checked', true);
            $("input[name='interval'][value='1']", form).prop('checked', true);
            interval = '1';
        }
        if((e.target.value === '40' && e.target.name === 'hiden') || (e.target.value === '0_67' && e.target.name === 'interval')){
            $("input[name='hiden'][value='40']", form).prop('checked', true);
            $("input[name='interval'][value='0_67']", form).prop('checked', true);
            interval = '0_67';
        }

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
                if($("input[name='profil']", form).length > 1){
                    sum += calculator.products[product][length][interval][profil]['prise'];
                    imgPath(calculator.products[product][length][interval][profil]);
                }else{
                    sum += calculator.products[product][length][interval]['prise'];
                    imgPath(calculator.products[product][length][interval]);
                }
            }
        }else{
            sum += calculator.products[product][length][interval][stringery][profil]['prise'];
            imgPath(calculator.products[product][length][interval][stringery][profil]);
        }

        additional.each(function (i, e) {
            sum += calculator.additional[$(e).val()]
        });
        $("input[name='additional[]'][type='hidden']", form).each(function (i, e) {
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