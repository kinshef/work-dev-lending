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
      value: "Agrodachnikby"
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
    // return false;

    $.ajax({
      type: "POST",
      url: atob('aHR0cHM6Ly9za2lka2EtdHV0LmJ5L2FjdGlvbi9pbmRleC5waHA='),
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

  $("body").mouseleave(function (event) {
    if (typeof sessionStorage !== "undefined") {
      if (!sessionStorage.getItem("modalLeaveShowed") && event.clientY < -12) {
        sessionStorage.setItem("modalLeaveShowed", "true");
        $("#modal-leave").modal("show");
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

  //owl-carousel
  $(".owl-carousel-productsImg").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoHeight: true,
    navText: ['<i class="fa mr-3 fa-lg fa-angle-left" aria-hidden="true"></i>', '<i class="fa ml-3 fa-lg fa-angle-right" aria-hidden="true"></i>'],
  });

  $(".owl-carousel-sale").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoHeight: true,
    navText: ['<i class="fa mr-3 fa-lg fa-angle-left" aria-hidden="true"></i>', '<i class="fa ml-3 fa-lg fa-angle-right" aria-hidden="true"></i>'],
  });
  $(".owl-carousel-comments").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoHeight: true,
    margin: 40,
    navText: ['<i class="fa fa-lg fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-lg fa-angle-right" aria-hidden="true"></i>'],
  });

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
    console.log(intervalId);
    clearInterval(intervalId);
    clearTimeout(timerId);
    form.removeClass("show animate__rotateInDownLeft");
    intervalId = setInterval(() => {
      $(".gift-form").addClass("show animate__rotateInDownLeft");
    }, 55000);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    /* countdown */
    let dateEnd = new Date();
    dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
    dateEnd.setHours(0, 0, 0);
    let countdown = new LightCountdown(".countdown-week", dateEnd, { animation: "animated flipInX", animationDuration: "600ms" });
  } catch (e) { console.error(e); }
});
