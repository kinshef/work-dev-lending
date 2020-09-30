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

  // show and hidden button scroll up
  $(window).scroll(function () {
    if (0 < $(window).scrollTop()) {
      $(".scroll-up").addClass("scroll-up_show");
    } else {
      $(".scroll-up").removeClass("scroll-up_show");
    }
  });

  // input musk
  $(".phone-input-lib").inputmask("+375(99)9999999");
  $(".contact__form-input").inputmask("+375(99)9999999");

  // Smooth scroll
  $(".smoothscroll").click(function (event) {
    console.log(event);
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 250
        },
        400
      );
    }
  });

  // light links on scroll
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
});

function darkMode() {
  const body = document.querySelector('body');
  const card = document.querySelector('#light');

  body.classList.add("dark");
  card.classList.add("light");
  setTimeout(() => {
    body.classList.remove("dark");
    card.classList.remove("light");
  }, 1000);
}
