$(function () {


    $("form").submit(function (event) {
        event.preventDefault();

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
            value: "Test"
        });
        data.push({
            name: "title",
            value: "Test message"
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
        }).done(function (response) {
            alert(response.text);
        }).fail(function (error, textStatus) {
            console.log(error, textStatus);
            alert('Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!');
        });

        // Event dispatcher for IE9+ included
        if(typeof(Event) === 'function') {
            document.dispatchEvent(new Event('app.form.send'));
        }else{
            var ev = document.createEvent('Event');
            ev.initEvent('app.form.send', false, false);
            document.dispatchEvent(ev);
        }

        //console.log(JSON.stringify(data))
        return false
    });

    $("a.smoothscroll").click(function(a) {
        "" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
            scrollTop: $(a).offset().top - 100
        }, 400))
    });

 // links hightLight after scroll page
//   $.fn.nav = function (item) {
//     var point = {
//       offset: 0
//     };
//     $.extend(point, item);
//     var links = this;
//     $(links).each(function (a, index) {
//       var link = $(index.hash);
//       var place = $(link).offset();
//       $(window).scroll(function () {
//         var newPoint = $(window).scrollTop() + point.offset;
//         place.top < newPoint && newPoint < place.top + $(link).height() && ($(links).removeClass("active"), $(index).addClass("active"))
//       })
//     })
//   };
//   $(".js-nav-scroll").nav({
//     offset: 150
//   });
// });

});




document.addEventListener("DOMContentLoaded", function () {

    try {
        var mainNav = document.querySelector('.btn-top');
        document.onscroll = function () {
            if(window.pageYOffset >= 400){
                mainNav.classList.add('active');
            } else {
                mainNav.classList.remove('active');
            }
        };
    } catch (error) {
        console.log(error);
    }

    try {
        var localNevValue = function(key, nevValue, obgect){
            var inquiry = JSON.parse(localStorage.getItem(key));
            if(obgect){
                var Value = {...inquiry, [obgect]: {...inquiry[obgect], ...nevValue}}
            }else{
                var Value = {...inquiry, ...nevValue}
            }
            localStorage.setItem(key, JSON.stringify(Value));
        }
    
        var localDeleteValue = function(key, deleteObgect){
            var json = {...oldJson};
            delete json[deleteObgect];
            localStorage.setItem(key, JSON.stringify(json));
        }
    
        var eventHandler = function(){
            Array.prototype.forEach.call(document.querySelectorAll('.product-item'), function (item){
                var itemProduct = item.querySelector('input[name="product"]').value;
                item.querySelector('.product-item__close').onclick = function (){
                    localDeleteValue('tcart', itemProduct)
                    displayResult()
                }
                item.querySelector('.product-item__minus').onclick = function (){
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
                item.querySelector('.product-item__plus').onclick = function (){
                    var nevValCol = ++oldJson[itemProduct].col
                    var nevValPrice = oldJson[itemProduct].onePrice * nevValCol;
                    localNevValue('tcart', {col: nevValCol, price: nevValPrice}, itemProduct)
                    displayResult()
                }
    
                item.querySelector('.product-item__col-span').onclick = function (){
                    this.style.display = 'none';
                    item.querySelector('.product-item__col-input').value = oldJson[itemProduct].col;
                    item.querySelector('.product-item__col-input').style.display = 'block';
                    item.querySelector('.product-item__col-input').focus()
                }
                item.querySelector('.product-item__col-input').onblur = function (){
                    this.style.display = 'none';
                    if(this.value>0){
                        var nevValPrice = oldJson[itemProduct].onePrice * this.value;
                        localNevValue('tcart', {col: +this.value, price: nevValPrice}, itemProduct)
                    }else{
                        localDeleteValue('tcart', itemProduct)
                    }
                    displayResult()
                    item.querySelector('.product-item__col-span').style.display = 'block';
                }
            })
        }
    
        var oldJson = JSON.parse(localStorage.getItem('tcart'));
        if(oldJson === null){localStorage.setItem('tcart', JSON.stringify({}));}
        var displayResult = function(){
            document.querySelector('.modal-product__total-price').innerHTML = 0;
            oldJson = JSON.parse(localStorage.getItem('tcart'));
            document.querySelector('.product-wrap').innerHTML = '';
            var itogCatalog = {itogPrice: 0, itogCol: 0};
            for (var key in oldJson){
                itogCatalog.itogPrice = itogCatalog.itogPrice + oldJson[key].price;
                itogCatalog.itogCol = itogCatalog.itogCol + oldJson[key].col;
                document.querySelector('.product-wrap').innerHTML += '<div class="product-item my-2 font-weight-light"><input type="hidden" name="product" value="'+key+'"><input type="hidden" name="productName-col" value="'+oldJson[key].title+'-'+oldJson[key].col+'"><div class="row align-items-center text-center"><div class="col-3"><img src="'+oldJson[key].img+'"></div><div class="col-3 p-0 text-left"><div class="form-item__title">'+oldJson[key].title+'</div></div><div class="col-3 d-flex justify-content-around"><span class="product-item__minus"><span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><i class="fa fa-minus fa-stack-1x"></i></span></span><span class="product-item__col-span">'+oldJson[key].col+'</span><input class="product-item__col-input text-center" style="display: none;" type="number" name="product-item__col" required /><span class="product-item__plus"><span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><i class="fa fa-plus fa-stack-1x"></i></span></span></div><div class="col-3 d-flex justify-content-around"><span class="product-item__price">'+oldJson[key].price+' р.</span><span class="product-item__close"><span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><span class="fa-stack-1x">&#10005;</span></span></span></div></div></div>';
            }
            if(Object.keys(oldJson).length){
                localNevValue('itogCatalog', itogCatalog)
                document.querySelector('.active-catalog').style.display = 'block';
                document.querySelector('.active-catalog__item').textContent = JSON.parse(localStorage.getItem('itogCatalog')).itogCol;
                document.querySelector('.active-catalog__col').textContent = JSON.parse(localStorage.getItem('itogCatalog')).itogPrice + ' р.';
                document.querySelector('.modal-product__total-price').textContent = JSON.parse(localStorage.getItem('itogCatalog')).itogPrice;
                eventHandler()
            }else {
                localStorage.removeItem('itogCatalog');
                document.querySelector('.active-catalog').style.display = 'none';
                $('.modal').modal('hide');
            }
        }
        displayResult()
    
    
        Array.prototype.forEach.call(document.querySelectorAll('.has-calculator, .modal-primer'), function (item) {
            var itemProduct = item.querySelector('input[name="product"]').value;
            
            if(item.classList.contains("modal-primer")){
                item.id = 'modal-'+item.querySelector('input[name="product"]').value+'-primer';
            }

            if(item.querySelector('.has-calculator__img').href){
                item.querySelector('.has-calculator__img').dataset.fancybox = itemProduct;
                item.querySelector('.has-calculator__img').href = calculatorData[itemProduct].img;
            }
            item.querySelector('.has-calculator__img img').src = calculatorData[itemProduct].img;
            if(item.querySelector('.has-calculator__btnDetails')){
                item.querySelector('.has-calculator__btnDetails').href = '#modal-'+ itemProduct +'-primer';
            }
            item.querySelector('.has-calculator__title').textContent = calculatorData[itemProduct].title;
            item.querySelector('.has-calculator__price').innerHTML = '<div class="h3 text-red d-inline-block"><span class="jPrice">'+calculatorData[itemProduct].price+'</span> руб.</div>';
            if(calculatorData[itemProduct].priceOld){
                item.querySelector('.has-calculator__price').innerHTML += '<s class="h5 text-muted font-weight-light d-inline-block mx-2"><span class="jPriceOld">'+calculatorData[itemProduct].price+'</span> руб.</s>';
            }
            item.onclick = function () {
                if(event.target && event.target.getAttribute('href') === ('#modal-product')) {
                    $('.modal').modal('hide');
                    if(oldJson.hasOwnProperty(itemProduct)){
                        var nevValCol = ++oldJson[itemProduct].col;
                        var nevValPrice = oldJson[itemProduct].onePrice * nevValCol;
                        localNevValue('tcart', {col: nevValCol, price: nevValPrice}, itemProduct)
                        displayResult()
                    }else {
                        var nevVal = {col:1, onePrice: calculatorData[itemProduct].price}
                        var json = {...oldJson, [itemProduct]: { ...calculatorData[itemProduct], ...nevVal} }
                        localStorage.setItem('tcart', JSON.stringify(json));
                        displayResult()
                    }
                }
            }
        })
    } catch (error) {
        console.log(error);
    }

});












