$(document).ready(function () {
  // Form submit
  $("form").submit(function (event) {
    event.preventDefault();
    if (typeof sessionStorage !== 'undefined') {
      if (sessionStorage.getItem('formSubmitted')) {
        if (!confirm('Вы уже отправили заявку, повторить?')) {
          return false
        }
      } else {
        sessionStorage.setItem('formSubmitted', 'true')
      }
    }
    var data = $(this).serializeArray();
    data.push({
      name: "source",
      value: "Tehnosad"
    });
    data.push({
      name: "title",
      value: "Мотоблоки"
    });
    data.push({
      name: "link",
      value: location.href
    });

    // console.log(JSON.stringify(data));
    // return false; // Testing

    $.ajax({
      type: "POST",
      url: "https://skidka-tut.by/action/index.php",
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
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
    // return false
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
      },
        400
      );
    }
  });

  $(".owl-specifications").owlCarousel({
    items: 1,
    margin: 30,
    loop: true,
    nav: true,
    navText: ["<i class=\"fa fa-lg fa-2x fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-lg fa-2x fa-angle-right\" aria-hidden=\"true\"></i>"],
    freeDrag: false,
    dots: true,
    autoHeight: true
  });

  $(".owl-reviews").owlCarousel({
    responsive: {
      375: {
        items: 1
      },
      1024: {
        items: 2
      },
      1025: {
        items: 3
      }
    },
    margin: 30,
    loop: true,
    nav: true,
    navText: ["<i class=\"fa fa-3x fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-3x fa-angle-right\" aria-hidden=\"true\"></i>"],
    freeDrag: false,
    dots: false
  });

  $(".owl-carousel-prodyctsImg").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoHeight: true,
    navText: ["<i class=\"fa fa-lg fa-2x fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-lg fa-2x fa-angle-right\" aria-hidden=\"true\"></i>"]
  })
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    /* countdown */
    let dateEnd = new Date();
    dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
    dateEnd.setHours(0, 0, 0);
    let countdown = new LightCountdown(".countdown-week", dateEnd, {
      animation: "animated flipInX",
      animationDuration: "600ms"
    });
  } catch (e) {
    console.error(e);
  }

  try {
    /* highlight current link in navigation */
    [].forEach.call(document.querySelectorAll('.js-nav-scroll'), function (el) {
      if (typeof el.hash !== "undefined" && document.querySelector(el.hash) !== null) {
        const observable = document.querySelector(el.hash);
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              [].forEach.call(document.querySelectorAll('.js-nav-scroll'), function (el2) {
                el2.classList.remove('active');
              });
              el.classList.add('active');
            }
          });
        });
        observer.observe(observable);
      }
    });
  } catch (e) {
    console.error(e);
  }

  try {
    /* nav scroll */
    let scrollPosPrev = 0;
    window.addEventListener("scroll", function () {
      let currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
      if (currentScroll === scrollPosPrev) {
        return;
      }
      if (currentScroll > scrollPosPrev) {
        document.querySelector(".section-nav").classList.add('js-scroll-down')
      } else {
        document.querySelector(".section-nav").classList.remove('js-scroll-down')
      }
      scrollPosPrev = currentScroll;
    });
  } catch (e) {
    console.error(e);
  }
});
