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
          value: "Agrolux"
      });
      data.push({
          name: "title",
          value: "Пила"
      });
      data.push({
          name: "link",
          value: location.href
      });

      $.ajax({
          type: 'POST',
          url: atob('aHR0cHM6Ly9za2lka2EtdHV0LmJ5L2FjdGlvbi9pbmRleC5waHA='),
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
          dataType: 'json',
          data: data,
      })
          .done(function (response) {
              alert(response.text)
          })
          .fail(function (error, textStatus) {
              console.log(error, textStatus)
              alert(
                  'Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!'
              )
          })

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
          scrollTop: $(hash).offset().top - 70
        },
        400
      );
    }
  });

  // slick slider
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
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

  try {
    var scanText = function(param){
      var maxHidP = 0;
      for(var i=0; i<param.length;i++){
        if(maxHidP<param[i].scrollHeight){
          maxHidP = param[i].scrollHeight;
          for(var j=0; j<param.length;j++){
            if(param[j].scrollHeight < maxHidP){
              param[j].style.height = maxHidP + 'px';
            }
          }
        }
      }
    }
    scanText(document.querySelectorAll('.catalog__parameter'))
    window.onresize = function() {
      if (document.body.clientWidth > 768){
        scanText(document.querySelectorAll('.catalog__parameter'))
      }else{
        for(var j=0; j<catalogParameter.length;j++){
          catalogParameter[j].style.height = 'auto';
        }
      }
    }
  } catch (e) {
    console.error(e);
  }


});
