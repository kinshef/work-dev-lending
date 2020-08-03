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
      value: "Sadovnik"
    });
    data.push({
      name: "title",
      value: "Беседка"
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
});

document.addEventListener("DOMContentLoaded", function () {
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
});
