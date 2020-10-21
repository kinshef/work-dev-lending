$(document).ready(function () {

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

  // Smooth scroll
  $(".smoothscroll").click(function (event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      $("html, body").animate({
          scrollTop: $(hash).offset().top - 100
      },400);
    }
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
  
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    // countdown
    let dateEnd = new Date();
    dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
    dateEnd.setHours(0, 0, 0);
    let countdown = new LightCountdown(".countdown-week", dateEnd, { animation: "animated flipInX", animationDuration: "600ms" });
  } catch (e) {
    console.error(e);
  }
  
  try{
        /* Animate blocks */
        [].forEach.call(document.querySelectorAll('[data-animation]'), function(observable){
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const fx = observable.dataset.animation.split(' ');
                        observable.classList.add(...fx);
                        observable.addEventListener('animationend', function handler() {
                            observable.classList.remove(...fx);
                            observable.removeEventListener('animationend', handler);
                        });
                        /*Comment this line to repeat animation when viewport return to element*/
                        observer.unobserve(observable);
                    }
                });
            });
            observer.observe(observable);
        });
    }catch (e) {console.error(e);}

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

 // links hightLight after scroll page
  $.fn.nav = function (item) {
    var point = {
      offset: 0
    };
    $.extend(point, item);
    var links = this;
    $(links).each(function (a, index) {
      var link = $(index.hash);
      var place = $(link).offset();
      $(window).scroll(function () {
        var newPoint = $(window).scrollTop() + point.offset;
        place.top < newPoint && newPoint < place.top + $(link).height() && ($(links).removeClass("active"), $(index).addClass("active"))
      })
    })
  };
  $(".js-nav-scroll").nav({
    offset: 150
  });
  
});

  //Close consultation modal
  $('.modal-consultation__close').click(function () {
    $("#modal-consultation").removeClass("shown")
  });
  //Close gift modal
  $('.modal-gift__close').click(function () {
    $("#modal-gift").removeClass("shown")
  });

  // Show popup #modal-consultation when user scrolls site to the section catalog
  $(window).on("scroll", function () {
    $(this).scrollTop() > $("#product").offset().top && "undefined" !== typeof sessionStorage && !sessionStorage.getItem("modalConsultationShowed") &&
      (sessionStorage.setItem("modalConsultationShowed", "true"), $("#modal-gift").addClass("shown"))
  });

  // Show popup #modal-gift after 60 sec
  setTimeout(function () {
    "undefined" === typeof sessionStorage || sessionStorage.getItem("modalGiftShowed") || (sessionStorage.setItem("modalGiftShowed", "true"), $("#modal-consultation").addClass("shown"))
  }, 10000);



    var mainNav = document.querySelector('.main-nav');
    document.onscroll = function () {
        if(window.pageYOffset >= 100){
            mainNav.classList.add('fixHead');
        } else {
            mainNav.classList.remove('fixHead');
        }
    };