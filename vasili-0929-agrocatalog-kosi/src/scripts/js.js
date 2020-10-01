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



    $(".owl-carousel-modal").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoHeight:true,
        navText: ['<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-angle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-angle-right fa-stack-1x fa-inverse"></i></span>'],
    });


// $("a.smoothscroll").click(function(a) {
//     "" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
//         scrollTop: $(a).offset().top
//     }, 400))
// });

 // links hightLight after scroll page
//  $.fn.nav = function (item) {
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

var mainNav = document.querySelector('.main-nav');
document.onscroll = function () {
    if(window.pageYOffset >= 100 && document.body.offsetWidth >= 992 || window.pageYOffset >= 240 && document.body.offsetWidth < 992){
        mainNav.classList.add('fixHead');
    } else {
        mainNav.classList.remove('fixHead');
    }
};

});
document.addEventListener("DOMContentLoaded", function () {

    // animate block sale in header
    var headerBlock = document.getElementById("section-header");
    var moveBlock = document.getElementById("saleBlock");
    var maxClientX = document.body.offsetWidth;
    var maxClientY = document.body.offsetHeight*0.8;
    // set default animate delay 
    moveBlock.style.transition = "0s";

    function blockStop() {
        moveBlock.style.transform = `translate(${0}px,${0}px)`;
    }

    function blockMove(event) {
        moveBlock.style.transform = `translate(${-event.clientX/4}px,${-event.clientY/4}px)`;
    }

    headerBlock.addEventListener("mousemove", function (event) {
        if(document.body.offsetWidth > 1200){
            blockMove(event);
            if (event.clientX > maxClientX || event.clientY > maxClientY) {
                blockStop();
            }
        }
    });
    headerBlock.addEventListener("mouseout", function () {
        blockStop();
    });

/* countdown */
    // try {
    //     var dateEnd = new Date();
    //     dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
    //     dateEnd.setHours(0, 0, 0);
    //     var countdown = new LightCountdown(".countdown-week", dateEnd, {animation: "animated flipInX", animationDuration: "600ms"});
    // } catch (e) {console.error(e);}

});












