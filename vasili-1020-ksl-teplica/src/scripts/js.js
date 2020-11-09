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

// $("a.smoothscroll").click(function(a) {
//     "" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
//         scrollTop: $(a).offset().top
//     }, 400))
// });


    $(".owl-carousel-review").owlCarousel({
        items: 1,
        nav: true,
        margin: 100,
        loop: true,
        dots: false,
        autoHeight:true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });
    $(".owl-carousel-catalog").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoHeight:true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });

    $(".owl-carousel-modal").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        autoHeight:true,
        dotsData: true,
        dots: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });

    $('.modal-prBtn').click(function(){
        // console.log($('.modal-product'));
        // $('.modal-product').each(function(indx, elem){
        //     if(elem.classList.contains('show')){
        //         console.log(elem)
        //         elem.modal('toggle');
        //     }
        // })
        // console.log($($(this).attr('href')));
        // console.log(this);
        // $(".modal").modal("hide");
        // $('.modal-product').modal('hide');
        // $('.modal-product').modal('dispose');
        // $('.modal-product').hide()
        // $($(this).attr('href')).modal('show');
        // $("body").addClass('modal-open');
        // $($(this).attr('href')).show()

        var hideModal = function(asd){
            var showModal = function(modal){
                modal.modal('show');
            }
            $(".modal").modal("hide");
            showModal($($(asd).attr('href')))
        }
        hideModal(this);
    })



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

/* countdown */
    // try {
    //     var dateEnd = new Date();
    //     dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
    //     dateEnd.setHours(0, 0, 0);
    //     var countdown = new LightCountdown(".countdown-week", dateEnd, {animation: "animated flipInX", animationDuration: "600ms"});
    // } catch (e) {console.error(e);}

});












