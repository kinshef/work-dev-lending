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
        return false
    });

    var owl = $(".owl-carousel-advantages").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        navText: ['<i class="fa fa-lg fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-lg fa-angle-right" aria-hidden="true"></i>'],

    });
    owl.on('changed.owl.carousel', function(event) {
        for(var i=0;i<event.page.size;i++){
            $(".advantages-slader-dot").removeClass('active');
        }
        $(".advantages-slader-dot:nth-child("+(event.page.index+1)+")").addClass("active")
    })
    $(".advantages-slader-dot").click(function(event){
        for(var i=0; i<$(".advantages-slader-dot").length; i++){
            if($(".advantages-slader-dot")[i] === event.target){
                $('.owl-carousel-advantages').trigger('to.owl.carousel', i)
            }
        }
    })

    var owl = $(".owl-carousel-catalog").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        autoHeight:true,
        navText: ['<i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>'],
    });

    var owl = $(".owl-carousel-reviews").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        margin:5,
        autoHeight:true,
        navText: ['<i class="fa fa-lg fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-lg fa-angle-right" aria-hidden="true"></i>'],
    });

    var owl = $(".owl-carousel-photo").owlCarousel({
        responsive : {
            0 : {
                items: 1,
                stagePadding: 50,
            },
            720 : {
                items: 1,
                stagePadding: 100,
            },
            1000 : {
                items: 2,
                stagePadding: 150,
            }
        },
        nav: true,
        loop: true,
        dots: true,
        margin:20,
        autoHeight:true,
        navText: ['<i class="fa fa-lg fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-lg fa-angle-right" aria-hidden="true"></i>'],
    });
    
    // Smooth scroll
    $("a.smoothscroll").click(function (event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 100
            },
                400
            );
        }
    });

})

document.addEventListener("DOMContentLoaded", function () {
var calculatorPrice__btn = document.querySelector('#calculator-price__btn');
var calculatorPrice__items = document.querySelectorAll('.calculator-price__forma>div');
var quiz__current__items = document.querySelectorAll('.quiz__current>div');
var calculator__stapt = document.querySelectorAll('.calculator__stapt');
var calculator__finish = document.querySelectorAll('.calculator__finish');

var toglActive = function(a,b){
    var active;
    for(var i=0;i<a.length;i++){
        if(a[i].classList.contains(b)){
            active = i;
        }
    }
    if(active != a.length-1){
        a[active].classList.remove(b);
        active++;
        a[active].classList.add(b);
    } 
}
var finishCalculatorPrice = function(element, elemdisaibl, elemenable){
    if(element[element.length-1].classList.contains('active')){
        for(var i=0;i<elemdisaibl.length;i++){
            elemdisaibl[i].style.display = 'none';
        }
        for(var i=0;i<elemenable.length;i++){
            elemenable[i].style.display = 'block';
        }
    }
}

calculatorPrice__btn.onclick = function () {
    toglActive(calculatorPrice__items, 'active');
    toglActive(quiz__current__items, 'current');
    finishCalculatorPrice(calculatorPrice__items, calculator__stapt, calculator__finish);
}

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












