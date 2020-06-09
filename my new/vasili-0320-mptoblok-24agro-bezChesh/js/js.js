$(function () {


    // Form submit
    $("form").submit(function (event) {
        event.preventDefault()
        if(typeof sessionStorage !== 'undefined'){
            if(sessionStorage.getItem('formSubmitted')){
                if(!confirm('Вы уже отправили заявку, повторить?')){return false}
            }else{
                sessionStorage.setItem('formSubmitted', 'true')
            }
        }
        var data = $(this).serializeArray();
        data.push({
            name: "source",
            value: "Agropapa"
        });
        data.push({
            name: "title",
            value: "Перезвонить по сварке"
        });
        data.push({
            name: "link",
            value: location.href
        });
        /*console.log(JSON.stringify(data));
        return false;*/ // Testing
        $.ajax({
            type: "POST",
            url: "https://skidka-tut.by/action/index.php",
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            dataType: "json",
            data: data,
            beforeSend: function () {
                new Noty({
                    text: 'Отправка запроса...',
                    type: 'information'
                }).show();
            }
        }).done(function (response) {
            new Noty({
                text: response.text,
                type: response.type,
                timeout: 10000,
                killer: true
            }).show();
        }).fail(function (error, textStatus) {
            console.log(textStatus);
            new Noty({
                text: 'Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!',
                type: 'error',
                killer: true
            }).show();
        });
        try {
            ym(55862806, 'reachGoal', 'form_send');
        }catch (error) {console.log(error)}
        //console.log(JSON.stringify(data))
        return false
    });

    $('.section-header-main').mousemove(function(e) {
        parallax(e, document.querySelector('.header-main-img img:nth-child(1)'), 6);
        parallax(e, document.querySelector('.header-main-img img:nth-child(2)'), 3);
        parallax(e, document.querySelector('.header-main-img img:nth-child(3)'), 6);
    });

    function parallax(e, target, layer) {
        var x = -((e.pageX / $(window).width()*100) - 50) / layer;
        var y = -((e.pageY / $(window).height()*100) - 50) / (layer/1.5);
        target.style.transform = "translate("+ x +"%, "+ y +"%)";
    };

    var owl = $(".owl-carousel-advantages").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoHeight: true,
        navText: ['<i class="fa mr-1 fa-3x fa-angle-left" aria-hidden="true"></i>', '<i class="fa ml-1 fa-3x fa-angle-right" aria-hidden="true"></i>'],
    });

})

// $("a.smoothscroll").click(function(a) {
//     "" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
//         scrollTop: $(a).offset().top
//     }, 400))
// });

/* countdown */
    // try {
    //     var dateEnd = new Date();
    //     dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
    //     dateEnd.setHours(0, 0, 0);
    //     var countdown = new LightCountdown(".countdown-week", dateEnd, {animation: "animated flipInX", animationDuration: "600ms"});
    // } catch (e) {console.error(e);}



document.addEventListener("DOMContentLoaded", function () {

    var colElement = function(page, item){
        if(page === 0){
            item.parentNode.removeChild(item);
        }else{
            item.querySelector('.order-item__col-span').innerText = page;
            item.querySelector('.order-item__price').innerText = Number(calculatorData[item.querySelector('input[name="product"]').value].price)*page + ' р.';
        }
    }

    Array.prototype.forEach.call(document.querySelectorAll('.has-calculator'), function (item) {
        
        item.querySelector('.has-calculator__taitl').textContent = calculatorData[item.querySelector('input[name="product"]').value].taitl;
        item.querySelector('.has-calculator__Price').innerHTML = '<div class="h3 text-red d-inline-block"><span class="jPrice">'+calculatorData[item.querySelector('input[name="product"]').value].price+'</span> руб.</div>';
        if(calculatorData[item.querySelector('input[name="product"]').value].priceOld){
            item.querySelector('.has-calculator__Price').innerHTML += '<s class="h4 opasiti-75 d-inline-block mx-2"><span class="jPriceOld">'+calculatorData[item.querySelector('input[name="product"]').value].price+'</span> руб.</s>';
        }

        item.onclick = function () {
            if(event.target && event.target.getAttribute('href') === ('#modal-order')) {
                var orderItems = document.querySelectorAll('.order-item');
                var element = false;
                for(var i=0;i<orderItems.length;i++){
                    if(orderItems[i].querySelector('input[name="product"]').value === item.querySelector('input[name="product"]').value){
                        element = i;
                    }
                }
                if(element !== false){
                    var pageTo = Number(orderItems[element].querySelector('.order-item__col-span').innerText) + 1;
                    colElement(pageTo, orderItems[element]);
                }else{
                    document.querySelector('.order-wrap').innerHTML += '<div class="order-item my-2 font-weight-light"><input type="hidden" name="product" value="'+item.querySelector('input[name="product"]').value+'"><div class="row align-items-center text-center"><div class="col-3"><img src="'+calculatorData[item.querySelector('input[name="product"]').value].img+'"></div><div class="col-3 text-left"><div>'+calculatorData[item.querySelector('input[name="product"]').value].taitl+'</div></div><div class="col-3 d-flex justify-content-around"><span class="order-item__minus"><span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><i class="fa fa-minus fa-stack-1x"></i></span></span><span class="order-item__col-span">1</span><input class="order-item__col-input text-center" style="display: none;" type="number" name="order-item__col" required /><span class="order-item__plus"><span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><i class="fa fa-plus fa-stack-1x"></i></span></span></div><div class="col-3 d-flex justify-content-around"><span class="order-item__price">'+calculatorData[item.querySelector('input[name="product"]').value].price+' р.</span><span class="order-item__close"><span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><span class="fa-stack-1x">&#10005;</span></span></span></div></div></div>';
                }
                asd()
            }
        }
    })



    var asd = function(){
        var orderItem = document.querySelectorAll('.order-item');
        document.querySelector('.modal-order__total-price').innerHTML = 0;
        if(orderItem.length > 0){
            Array.prototype.forEach.call(orderItem, function (item){
                document.querySelector('.modal-order__total-price').innerHTML = Number(document.querySelector('.modal-order__total-price').innerHTML) + parseFloat(item.querySelector('.order-item__price').innerText)



                item.querySelector('.order-item__close').onclick = function (){
                    item.parentNode.removeChild(item);
                    asd()
                }
                item.querySelector('.order-item__minus').onclick = function (){
                    var pageTo = Number(item.querySelector('.order-item__col-span').innerText) - 1;
                    colElement(pageTo, item)
                    asd()
                }
                item.querySelector('.order-item__plus').onclick = function (){
                    var pageTo = Number(item.querySelector('.order-item__col-span').innerText) + 1;
                    colElement(pageTo, item)
                    asd()
                }


                item.querySelector('.order-item__col-span').onclick = function (){
                    this.style.display = 'none';
                    item.querySelector('.order-item__col-input').value = this.textContent;
                    item.querySelector('.order-item__col-input').style.display = 'block';
                    item.querySelector('.order-item__col-input').focus()
                    asd()
                }
                item.querySelector('.order-item__col-input').onblur = function (){
                    this.style.display = 'none';
                    if(this.value>0){
                        colElement(this.value, item)
                    }else{
                        item.parentNode.removeChild(item);
                    }
                    asd()
                    item.querySelector('.order-item__col-span').style.display = 'block';
                }


            });
        }else {
            document.querySelector('#modal-order').click()
        }
    }










});












