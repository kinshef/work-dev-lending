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
      value: "Agrodachnikby"
    });
    data.push({
      name: "title",
      value: "Бензопила"
    });
    data.push({
      name: "link",
      value: location.href
    });

    /*console.log(JSON.stringify(data));
    return false;*/

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

  $(".owl-carousel-modal").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    autoHeight:true,
    navText: ['<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-angle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-angle-right fa-stack-1x fa-inverse"></i></span>'],
  });

});

document.addEventListener("DOMContentLoaded", function () {
  // resize block
  try {
    const heightBlock = () => {
      const cardBlock = document.querySelectorAll('.catalog-text');
      let maxHeight = 0;
      cardBlock.forEach((block) => {
        if (maxHeight < block.scrollHeight) {
          maxHeight = block.scrollHeight;
        }
      });
      cardBlock.forEach((block) => block.style.height = maxHeight + 'px');
    }
    heightBlock();
    window.onresize = () => {
      heightBlock();
    };
  } catch (e) {
    console.error(e);
  }
});
