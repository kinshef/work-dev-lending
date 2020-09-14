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

    $(window).resize(function() {
        if($(window).width() > 1199) {
            $('.section-header-main,.section-header').mousemove(function(e) {
                parallax(e, document.querySelector('.header-main-img img:nth-child(1)'), 6);
                parallax(e, document.querySelector('.header-main-img img:nth-child(2)'), 3);
                parallax(e, document.querySelector('.header-main-img img:nth-child(3)'), 6);
            });
        }
    }());

    function parallax(e, target, layer) {
        var x = -((e.pageX / $(window).width()*100) - 50) / layer;
        var y = -((e.pageY / $(window).height()*100) - 50) / (layer/1.5);
        target.style.transform = "translate("+ x +"%, "+ y +"%)";
    };



    $(".owl-carousel-advantages").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoHeight: true,
        navText: ['<i class="fa mr-1 fa-3x fa-angle-left" aria-hidden="true"></i>', '<i class="fa ml-1 fa-3x fa-angle-right" aria-hidden="true"></i>'],
    });

    $(".owl-carousel-prodyctsImg").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        autoHeight: true,
        navText: ['<i class="fa fa-lg fa-3x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-lg fa-2x fa-angle-right" aria-hidden="true"></i>'],
    });

    function stateCheck(form){
        if(form.val().length >0)
        {
            form.addClass('valid');
        }else{
            form.removeClass('valid');
        }
    }
    $(function(){
        $('.inputNameUp>input').on('focusout',function(){
            stateCheck($(this));
        })
    })

})

$("a.smoothscroll").click(function(a) {
    "" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
        scrollTop: $(a).offset().top
    }, 400))
});





    // для IE spret operator
    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    // для IE spret operator /

document.addEventListener("DOMContentLoaded", function () {

    var classTogl = function(clas, elem){
        if(elem.classList.contains(clas)){
            elem.classList.remove(clas)
        }else{
            elem.classList.add(clas)
        }
    }

    var sectionHeaderMenu = document.querySelector('.section-header-menu');
    document.querySelector('.section-header__menu').onclick = function (){
        classTogl('active', sectionHeaderMenu);
    }
    document.querySelector('.section-header-menu__close').onclick = function (){
        classTogl('active', sectionHeaderMenu);
    }
    sectionHeaderMenu.onclick = function (event){
        if(event.target.classList.contains('section-header-menu')){
            classTogl('active', sectionHeaderMenu);
        }
    }

    var mainNav = document.querySelector('.btn-top');
	document.onscroll = function () {
		if(window.pageYOffset >= 400){
			mainNav.classList.add('active');
		} else {
			mainNav.classList.remove('active');
		}
	};


    var localNevValue = function(key, nevValue, obgect){
        var inquiry = JSON.parse(localStorage.getItem(key));
        if(obgect){
            // var Value = {...inquiry, [obgect]: {...inquiry[obgect], ...nevValue}}
            var Value = _objectSpread({}, inquiry, _defineProperty({}, obgect, _objectSpread({}, inquiry[obgect], {}, nevValue)));
        }else{
            // var Value = {...inquiry, ...nevValue}
            var Value = _objectSpread({}, inquiry, {}, nevValue);
        }
        localStorage.setItem(key, JSON.stringify(Value));
    }

    var localDeleteValue = function(key, deleteObgect){
        // var json = {...oldJson};
        var json = _objectSpread({}, oldJson);
        delete json[deleteObgect];
        localStorage.setItem(key, JSON.stringify(json));
    }

    var eventHandler = function(){
        Array.prototype.forEach.call(document.querySelectorAll('.order-item'), function (item){
            var itemProduct = item.querySelector('input[name="product"]').value;
            item.querySelector('.order-item__close').onclick = function (){
                localDeleteValue('tcart', itemProduct)
                displayResult()
            }
            item.querySelector('.order-item__minus').onclick = function (){
                var nevValCol = --oldJson[itemProduct].col
                var nevValPrice = oldJson[itemProduct].onePrice * nevValCol;
                if(nevValCol > 0){
                    localNevValue('tcart', {col: nevValCol, price: nevValPrice}, itemProduct)
                    displayResult()
                }else{
                    localDeleteValue('tcart', itemProduct)
                    displayResult()
                }
            }
            item.querySelector('.order-item__plus').onclick = function (){
                var nevValCol = ++oldJson[itemProduct].col
                var nevValPrice = oldJson[itemProduct].onePrice * nevValCol;
                localNevValue('tcart', {col: nevValCol, price: nevValPrice}, itemProduct)
                displayResult()
            }

            item.querySelector('.order-item__col-span').onclick = function (){
                this.style.display = 'none';
                item.querySelector('.order-item__col-input').value = oldJson[itemProduct].col;
                item.querySelector('.order-item__col-input').style.display = 'block';
                item.querySelector('.order-item__col-input').focus()
            }
            item.querySelector('.order-item__col-input').onblur = function (){
                this.style.display = 'none';
                if(this.value>0){
                    var nevValPrice = oldJson[itemProduct].onePrice * this.value;
                    localNevValue('tcart', {col: +this.value, price: nevValPrice}, itemProduct)
                }else{
                    localDeleteValue('tcart', itemProduct)
                }
                displayResult()
                item.querySelector('.order-item__col-span').style.display = 'block';
            }

        })
    }


    var oldJson = JSON.parse(localStorage.getItem('tcart'));
    if(oldJson === null){localStorage.setItem('tcart', JSON.stringify({}));}
    var displayResult = function(){
        document.querySelector('.modal-order__total-price').innerHTML = 0;
        oldJson = JSON.parse(localStorage.getItem('tcart'));
        document.querySelector('.order-wrap').innerHTML = '';
        var itogCatalog = {itogPrice: 0, itogCol: 0};
        for (var key in oldJson){
            itogCatalog.itogPrice = itogCatalog.itogPrice + oldJson[key].price
            itogCatalog.itogCol = itogCatalog.itogCol + oldJson[key].col
            document.querySelector('.order-wrap').innerHTML += '<div class="order-item my-2 font-weight-light"><input type="hidden" name="product" value="'+key+'"><input type="hidden" name="productName-col" value="'+oldJson[key].taitl+'-'+oldJson[key].col+'"><div class="row align-items-center text-center"><div class="col-3"><img src="'+oldJson[key].img+'"></div><div class="col-3 p-0 text-left"><div class="form-item__taitl">'+oldJson[key].taitl+'</div></div><div class="col-3 d-flex justify-content-around"><span class="order-item__minus"><span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><i class="fa fa-minus fa-stack-1x"></i></span></span><span class="order-item__col-span">'+oldJson[key].col+'</span><input class="order-item__col-input text-center" style="display: none;" type="number" name="order-item__col" required /><span class="order-item__plus"><span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><i class="fa fa-plus fa-stack-1x"></i></span></span></div><div class="col-3 d-flex justify-content-around"><span class="order-item__price">'+oldJson[key].price+' р.</span><span class="order-item__close"><span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><span class="fa-stack-1x">&#10005;</span></span></span></div></div></div>';
        }
        if(Object.keys(oldJson).length){
            localNevValue('itogCatalog', itogCatalog)
            document.querySelector('.active-catalog').style.display = 'block';
            document.querySelector('.active-catalog__item').textContent = JSON.parse(localStorage.getItem('itogCatalog')).itogCol;
            document.querySelector('.active-catalog__col').textContent = JSON.parse(localStorage.getItem('itogCatalog')).itogPrice + ' р.';
            document.querySelector('.modal-order__total-price').textContent = JSON.parse(localStorage.getItem('itogCatalog')).itogPrice;
            eventHandler()
        }else {
            localStorage.removeItem('itogCatalog');
            document.querySelector('.active-catalog').style.display = 'none';
            // document.querySelector('#modal-order').click()
            $('.modal').modal('hide');
        }
    }
    displayResult()


    Array.prototype.forEach.call(document.querySelectorAll('.has-calculator'), function (item) {
        var itemProduct = item.querySelector('input[name="product"]').value;

        item.querySelector('.has-calculator__taitl').textContent = calculatorData[itemProduct].taitl;
        item.querySelector('.has-calculator__Price').innerHTML = '<div class="h3 text-red d-inline-block"><span class="jPrice">'+calculatorData[itemProduct].price+'</span> руб.</div>';
        if(calculatorData[itemProduct].priceOld){
            item.querySelector('.has-calculator__Price').innerHTML += '<s class="h4 opasiti-75 d-inline-block mx-2"><span class="jPriceOld">'+calculatorData[itemProduct].price+'</span> руб.</s>';
        }

        item.onclick = function () {
            if(event.target && event.target.getAttribute('href') === ('#modal-order')) {
                $('.modal').modal('hide');
                if(oldJson.hasOwnProperty(itemProduct)){
                    var nevValCol = ++oldJson[itemProduct].col;
                    var nevValPrice = oldJson[itemProduct].onePrice * nevValCol;
                    localNevValue('tcart', {col: nevValCol, price: nevValPrice}, itemProduct)
                    displayResult()
                }else {
                    var nevVal = {col:1, onePrice: calculatorData[itemProduct].price}
                    // var json = {...oldJson, [itemProduct]: { ...calculatorData[itemProduct], ...nevVal} }
                    var json = _objectSpread({}, oldJson, _defineProperty({}, itemProduct, _objectSpread({}, calculatorData[itemProduct], {}, nevVal)));
                    localStorage.setItem('tcart', JSON.stringify(json));
                    displayResult()
                }

            }
        }
    })


});












