


var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (c) {
    var b = 0;
    return function () {
        return b < c.length ? {
            done: !1,
            value: c[b++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function (c) {
    return {
        next: $jscomp.arrayIteratorImpl(c)
    }
};
$jscomp.makeIterator = function (c) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];
    return b ? b.call(c) : $jscomp.arrayIterator(c)
};
$jscomp.arrayFromIterator = function (c) {
    for (var b, a = []; !(b = c.next()).done;) a.push(b.value);
    return a
};
$jscomp.arrayFromIterable = function (c) {
    return c instanceof Array ? c : $jscomp.arrayFromIterator($jscomp.makeIterator(c))
};






    try {
        [].forEach.call(document.querySelectorAll("[data-animation]"), function (a) {
            var b = new IntersectionObserver(function (c) {
                c.forEach(function (c) {
                    if (c.isIntersecting) {
                        var d = a.dataset.animation.split(" ");
                        a.classList.add.apply(a.classList, $jscomp.arrayFromIterable(d));
                        a.addEventListener("animationend", function e() {
                            a.classList.remove.apply(a.classList, $jscomp.arrayFromIterable(d));
                            a.removeEventListener("animationend", e)
                        });
                        b.unobserve(a)
                    }
                })
            });
            b.observe(a)
        })
    } catch (a) {
        console.error(a)
    }










$(document).ready(function () {
    // Form submit
    $("form").submit(function (event) {
        event.preventDefault();

        if(typeof sessionStorage !== 'undefined'){
            if(sessionStorage.getItem('formSubmitted')){
                if(!confirm('Вы уже отправили заявку, повторить?')){return false}
            }else{
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
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            dataType: "json",
            data: data,
        }).done(function (response) {
            alert(response.text);
        }).fail(function (error, textStatus) {
            console.log(error, textStatus);
            alert('Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!');
        });

        // Event dispatcher for IE9+ included
        if(typeof(Event) === 'function') {
            document.dispatchEvent(new Event('app.form.send'));
        }else{
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

	// Show popup when user leave site
    $('body').mouseleave(function (event) {
        if (typeof sessionStorage !== 'undefined') {
            if (!sessionStorage.getItem('modalLeaveShowed') && event.clientY < -12) {
                sessionStorage.setItem('modalLeaveShowed', 'true');
                $('#modal-leave').modal('show');
            }
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {

    try {
        // countdown
        let dateEnd = new Date();
        dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
        dateEnd.setHours(0, 0, 0);
        new LightCountdown(".countdown-week", dateEnd, {
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


    var mainNav = document.querySelector('.main-nav');
    document.onscroll = function () {
        if(window.pageYOffset >= 100){
            mainNav.classList.add('fixHead');
        } else {
            mainNav.classList.remove('fixHead');
        }
    };










});


