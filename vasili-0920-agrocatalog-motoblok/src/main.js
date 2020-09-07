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
      value: "Agrocatalogby"
    });
    data.push({
      name: "title",
      value: "Мотоблок"
    });
    data.push({
      name: "link",
      value: location.href
    });

    // console.log(JSON.stringify(data));
    // return false;

    $.ajax({
      type: "POST",
      url: atob('aHR0cHM6Ly9za2lka2EtdHV0LmJ5L2FjdGlvbi9pbmRleC5waHA='),
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

  $('.owl-modal').owlCarousel({
    margin: 10,
    loop: false,
    nav: true,
    navText: ['<i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
      }
    }
  });

  $('.owl-feedback').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
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

function showArticle(numberItem) {
  const article = document.getElementsByClassName("fa-times");
  article[numberItem].classList.contains("rotate") ? article[numberItem].classList.remove("rotate") : article[numberItem].classList.add("rotate");
  const articleText = document.querySelectorAll(".section-steps__item_text");
  let text = articleText[numberItem];
  $(text).slideToggle("slow");
}

document.addEventListener("DOMContentLoaded", function () {
  const callMini = document.querySelector(".call-mini");
  callMini.addEventListener("mouseover", function() {
    callMini.classList.remove("call-mini_hidden", "animate__animated", "animate__pulse", "animate__infinite");
    callMini.addEventListener("mouseleave", function() {
      callMini.classList.add("call-mini_hidden", "animate__animated", "animate__pulse", "animate__infinite");
    });
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
});
