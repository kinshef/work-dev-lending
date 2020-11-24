$(function () {

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

  $("a.smoothscroll").click(function (a) {
    "" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
      scrollTop: $(a).offset().top
    }, 400))
  });

  $(".owl-carousel-review").owlCarousel({
    items: 1,
    nav: true,
    margin: 100,
    loop: true,
    dots: false,
    autoHeight: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  });
  $(".owl-carousel-catalog").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    autoHeight: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  });
  $(".owl-carousel-modal").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoHeight: true,
    dotsData: true,
    dots: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  });
  $(".owl-carousel2-modal").owlCarousel({
    nav: true,
    loop: true,
    autoHeight: true,
    navText: ['<i class="fa fa-3x fa-angle-left"></i>', '<i class="fa fa-3x fa-angle-right"></i>'],
    responsive : {
      0 : {
        items: 2,
      },
      576 : {
        items: 2,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 4,
      },
    }
  });

  // fix problems when changing modals
  $('.modal-prBtn').click(function changeBody() {
    setTimeout(function () {
      if ($('body').hasClass('modal-open')) {
        changeBody()
      } else {
        $('body').addClass('modal-open');
      }
    }, 40)
  })
  // fix problems when changing modals end


  //gift modal
  let timerId = setTimeout(() => {
    $(".gift-form").addClass("show animate__rotateInDownLeft");
  }, 8000);

  $(".gift").click(() => $(".gift-form").addClass("show animate__rotateInDownLeft"));

  let intervalId;

  $(document).mouseup(function (event){
    const form = $(".gift-form");

    if ($(event.target).hasClass("close-btn")) {
      closeForm(form);
    }

    if (!form.is(event.target) && form.has(event.target).length === 0 && form.hasClass('show')) {
      closeForm(form);
    }
  });

  function closeForm(form) {
    clearInterval(intervalId);
    clearTimeout(timerId);
    form.removeClass("show animate__rotateInDownLeft");
    intervalId = setInterval(() => {
      $(".gift-form").addClass("show animate__rotateInDownLeft");
    }, 25000);
  }

});
document.addEventListener("DOMContentLoaded", function () {

  try {
    var raccoon = document.querySelector('.section-weWork');
    document.onscroll = function () {

      var targetPosition = {
          top: window.pageYOffset + raccoon.getBoundingClientRect().top,
          bottom: window.pageYOffset + raccoon.getBoundingClientRect().bottom
        },
        windowPosition = {
          top: window.pageYOffset,
          bottom: window.pageYOffset + document.documentElement.clientHeight
        };

      if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
        raccoon.classList.add('active');
      } else {
        raccoon.classList.remove('active');
      }
    };
  } catch (error) {
    console.log(error);
  }

});