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

    // console.log(JSON.stringify(data));
    // return false; // Testing

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
    // return false
  });

  try {
    /* countdown */
    let dateEnd = new Date();
    dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
    dateEnd.setHours(0, 0, 0);
    let countdown = new LightCountdown(".countdown-week", dateEnd, { animation: "animated flipInX", animationDuration: "600ms" });
  } catch (e) {
    console.error(e);
  }

  // Smooth scroll
  $(".smoothscroll").click(function (event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      $("html, body").animate(
        {
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
    let countdown = new LightCountdown(".countdown-week", dateEnd, { animation: "animated flipInX", animationDuration: "600ms" });
  } catch (e) {
    console.error(e);
  }

  try {
    [].forEach.call(document.querySelectorAll("[data-animation]"), function (a) {
      var b = new IntersectionObserver(function (c) {
        c.forEach(function (c) {
          if (c.isIntersecting) {
            var d = a.dataset.animation.split(" ");
            a.classList.add.apply(a.classList, $jscomp.arrayFromIterable(d));
            a.addEventListener("animationend", function g() {
              a.classList.remove.apply(a.classList, $jscomp.arrayFromIterable(d));
              a.removeEventListener("animationend", g)
            });
            b.unobserve(a)
          }
        })
      }
      );
      b.observe(a)
    })
  } catch (b) {
    console.error(b)
  }
});


