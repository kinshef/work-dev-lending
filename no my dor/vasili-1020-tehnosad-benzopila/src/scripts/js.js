$(function () {

  // Form submit
  $("form").submit(function (event) {
    event.preventDefault();

    if (typeof sessionStorage !== 'undefined') {
      if (sessionStorage.getItem('formSubmitted')) {
        if (!confirm('Вы уже отправили заявку, повторить?')) { return false }
      } else {
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
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      dataType: "json",
      data: data,
    }).done(function (response) {
      alert(response.text);
    }).fail(function (error, textStatus) {
      console.log(error, textStatus);
      alert('Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!');
    });

    // Event dispatcher for IE9+ included
    if (typeof (Event) === 'function') {
      document.dispatchEvent(new Event('app.form.send'));
    } else {
      var ev = document.createEvent('Event');
      ev.initEvent('app.form.send', false, false);
      document.dispatchEvent(ev);
    }

    //console.log(JSON.stringify(data))
    return false
  });

  // Show popup when user leave site
  $('body').mouseleave(function (event) {
    if (typeof sessionStorage !== 'undefined') {
      if (!sessionStorage.getItem('modalLeaveShowed') && event.clientY < -12) {
        sessionStorage.setItem('modalLeaveShowed', 'true');
        $('#modal-leave').modal('show');
      }
    }
  });

  // Smooth scroll
  $(".smoothscroll").click(function (event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      $("html, body").animate({
          scrollTop: $(hash).offset().top
      },400);
    }
  });



  $(".owl-carousel-catalog").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoHeight: true,
    navText: ['<i class="fa mr-3 fa-lg fa-angle-left" aria-hidden="true"></i>', '<i class="fa ml-3 fa-lg fa-angle-right" aria-hidden="true"></i>'],
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

    // light link on scroll page
    try {
        [].forEach.call(document.querySelectorAll(".js-nav-scroll"), function (event) {
        if ("undefined" !== typeof event.hash && null !== document.querySelector(event.hash)) {
            var target = document.querySelector(event.hash);
            (new IntersectionObserver(function (link) {
            link.forEach(function (item) {
                item.isIntersecting && ([].forEach.call(document.querySelectorAll(".js-nav-scroll"), function (event) {
                event.classList.remove("active")
                }), event.classList.add("active"))
            })
            })).observe(target)
        }
        })
    } catch (error) {
        console.error(error)
    }
    try {
        // countdown
        let dateEnd = new Date();
        dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
        dateEnd.setHours(0, 0, 0);
        let countdown = new LightCountdown(".countdown-week", dateEnd, { animation: "animated flipInX", animationDuration: "600ms" });
    } catch (error) {
        console.error(error);
    }
    try {
        [].forEach.call(document.querySelectorAll(".lightbox"), function (elemA) {
          elemA.addEventListener("click",function (even) {
            even.preventDefault();
            even = document.createElement("img");
            even.src = this.href;
            basicLightbox.create(even.outerHTML).show()
          })
        })
    } catch (error) {
        console.error(error)
    }
    try {
      var navHiden = 1;
      window.addEventListener("scroll", function () {
        var scrollWotch = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollWotch != navHiden){
          if(scrollWotch > navHiden){
            document.getElementById("section-nav").classList.remove("js-scroll-down");
          }else{
            document.getElementById("section-nav").classList.add("js-scroll-down");
          }
        }
      })
    } catch (error) {
      console.error(error)
    }

});












