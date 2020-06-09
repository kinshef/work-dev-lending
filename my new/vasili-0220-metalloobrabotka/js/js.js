$(function () {

    // Form submit
    $("form").submit(function (event) {
        event.preventDefault();

        if(typeof sessionStorage !== 'undefined'){
            if(sessionStorage.getItem('formSubmitted')){
                if(!confirm('Вы уже отправили заявку, повторить?')){return false}
            }else{
                sessionStorage.setItem('formSubmitted', 'true')
            }
        }
        debugger;
        var data = $(this).serializeArray();
        data.push({
            name: "source",
            value: "Agronext"
        });
        data.push({
            name: "title",
            value: "Теплица"
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

    $('.owl-carousel').owlCarousel({
        responsive : {
            0 : {
                items:1,
            },
            768 : {
                items:2,
            },
        },
        margin: 30,
        loop:true,
        nav:true,
        navText: ['&#10092;', '&#10093;'],
        freeDrag: false,
        dots:false
    })
})

document.addEventListener("DOMContentLoaded", function () {

    var sectionHeaderMain = document.querySelector('.section-header-main');
    setInterval(function(){
        if(sectionHeaderMain.classList.contains('bg1')){
            sectionHeaderMain.classList.remove('bg1'); 
            sectionHeaderMain.classList.add('bg2');
        }else{
            sectionHeaderMain.classList.remove('bg2'); 
            sectionHeaderMain.classList.add('bg1');
        }
    },5000)

    var VisibleAndChanges = function (target) {
        var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        };
        var windowPosition = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };
        if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
            target.classList.add('animation');
        }
    }

    var CorrectAdvantages = function(){
        var sectionHeaderMain = document.querySelectorAll('.section-advantages .advantages-animaid>div');
        for(var i=0; i<sectionHeaderMain.length; i++){
            if(!sectionHeaderMain[i].classList.contains('animation')){
                VisibleAndChanges(sectionHeaderMain[i]);
            }
        }    
    }
    CorrectAdvantages();

    var CorrectCardsUslug = function (){
        var cardsUslugInfo = document.querySelectorAll('.section-cards-uslug .uslug-info-animaid');
        for(var i=0; i<cardsUslugInfo.length; i++){
            if(!cardsUslugInfo[i].classList.contains('animation')){
                VisibleAndChanges(cardsUslugInfo[i]);
            }
        }    
    }
    CorrectCardsUslug();

    window.addEventListener('scroll', function() {
        CorrectAdvantages();
        CorrectCardsUslug();
    });


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












