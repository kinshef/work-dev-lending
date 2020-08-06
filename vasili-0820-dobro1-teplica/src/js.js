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
      value: "Dobro1by"
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
          scrollTop: $(hash).offset().top - 150
        },
        400
      );
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    // countdown
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
  //fix menu on scroll page
  try {
    let navigation = document.querySelector(".header-nav");
    document.addEventListener("scroll", () => {
      100 <= window.pageYOffset ? navigation.classList.add("header_fixed") : navigation.classList.remove("header_fixed")
    })
  } catch (e) {
    console.error(e)
  }
});
