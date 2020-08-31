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
      value: "Belagrosnabby"
    });
    data.push({
      name: "title",
      value: "Бетономешалка"
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
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        400
      );
    }
  });

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

document.addEventListener("DOMContentLoaded", function () {
  try {
    // countdown
    let dateEnd = new Date();
    dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
    dateEnd.setHours(0, 0, 0);
    let countdown = new LightCountdown(".countdown-week", dateEnd, { animation: "animated animate__rubberBand", animationDuration: "600ms" });
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

  const removeLightLink = () => {
    const links = [].slice.call(document.querySelectorAll('.link'));
    links.forEach((link) => link.classList.remove("nav-link_active"));
  };

  const linkNav = document.querySelector(".header-navigation");
  const TAG_A = 'A';

  linkNav.addEventListener('click', (event) => {
    if (event.target.tagName === TAG_A) {
      removeLightLink();
      event.target.classList.add("nav-link_active");
    }
  });
});
