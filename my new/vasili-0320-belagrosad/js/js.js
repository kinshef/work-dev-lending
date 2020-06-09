$(function () {

    $('.owl-reviews').owlCarousel({
        responsive : {
            375 : {
                items:1
            },
            1024 : {
                items:2
            },
            1025 : {
                items:3
            }
        },
        margin: 30,
        loop:true,
        nav:true,
        navText: ['<i class="fa fa-5x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-5x fa-angle-right" aria-hidden="true"></i>'],
        freeDrag: false,
        dots:false
    })

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

    $("a.smoothscroll").click(function(a) {
        "" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
            scrollTop: $(a).offset().top
        }, 400))
    });


})


document.addEventListener("DOMContentLoaded", function () {

    // tabs img to catalog
    Array.prototype.forEach.call(document.querySelectorAll('.catalog-castom-tab'), function (item) {
        var slaidActive = 0;
        var catalogTab = item.querySelectorAll('.catalog-tabs__tab');
        var updateSlaidActiveClass = function(a){
            for(var i=0;i<catalogTab.length;i++){
                catalogTab[i].classList.remove('active');
                if(i === a){catalogTab[a].classList.add('active')};
            }
        }
        updateSlaidActiveClass(slaidActive);
        
        var catalogBtnTab = item.querySelectorAll('.catalog-btnTab__item');
        var updateDotActiveClass = function(a){
            for(var i=0;i<catalogBtnTab.length;i++){
                catalogBtnTab[i].classList.remove('active');
                if(i === a){catalogBtnTab[a].classList.add('active')}
            }
        }
        updateDotActiveClass(slaidActive);
        
        var catalogBtnTabs = item.querySelector('.catalog-btnTab');
        catalogBtnTabs.onclick = function(event){
            if(event.target && event.target.tagName== 'IMG') {
                for(let i = 0; i<catalogBtnTab.length; i++) {
                    if(event.target == catalogBtnTab[i].querySelector('img')) {
                        slaidActive = i;
                        updateSlaidActiveClass(i);
                        updateDotActiveClass(i);
                    }
                }
            }
        }
    })

    // gallery Width to explorer(together max-content to css)
    var maxw = 0;
    var galleryItems = document.querySelector('.gallery-items');
    var galleryItemImg = document.querySelectorAll('.gallery-items__item img');
    for(var i=0;i<galleryItemImg.length;i++){
        maxw += galleryItemImg[i].naturalWidth;
        if(i === galleryItemImg.length-1){
            galleryItems.style.width = maxw+'px';
        }
    }

    // scroll left to right gallery
    function transitionSlaid() {
        var galleryItems = document.querySelector('.gallery-items');
        var a = galleryItems.offsetWidth - document.querySelector('.gallery-wrap').offsetWidth;
        if(galleryItems.style.transform === 'translateX(0px)'){
            galleryItems.style.transform =  'translateX(-'+ a +'px)';
            setTimeout(transitionSlaid,30000);
        }else {
            galleryItems.style.transform =  'translateX(0px)';
            setTimeout(transitionSlaid,30000); 
        }
    }
    transitionSlaid()

    // button 'Подробнее' to gallery
    var galleryBtn = document.querySelector('.gallery-btn');
    galleryBtn.onclick = function () {
        var galleryText = document.querySelector('.gallery-text');   
        if(galleryText.classList.contains('active')){
            galleryText.style.maxHeight='0px';
            galleryText.classList.remove('active');
        }else{
            galleryText.style.maxHeight= galleryText.scrollHeight + 'px';
            galleryText.classList.add('active')
        }
    }

    // yandex map
    ymaps.ready(init);
    function init(){   
        var myMap = new ymaps.Map("map", {
            center: [59.851312, 30.301015],
            zoom: 15,
            controls: ['zoomControl']
        });
        myPlacemark = new ymaps.Placemark([59.851312, 30.301015],{ 
            balloonContentHeader: 'MEGA',
            balloonContent: 'MEGAGROUP'
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('dblClickZoom');
    }

});












