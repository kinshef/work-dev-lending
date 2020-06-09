function showArticle(num) {
    const itemArr = document.querySelectorAll(".section-steps__item_text");
    let text = itemArr[num - 1];
    if (text.style.display === "block") {
        text.style.display = "none";
    } else {
        text.style.display = "block";
    }
}

$(document).ready(function () {
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
        debugger;
        var data = $(this).serializeArray();
        data.push({
            name: "source",
            value: "Agronext"
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



    //Mark active link
    $.fn.nav = function (a) {
        var b = {offset: 0};
        $.extend(b, a);
        var c = this;
        $(c).each(function (a, e) {
            var d = $(e.hash), f = $(d).offset();
            $(window).scroll(function () {
                var a = $(window).scrollTop() + b.offset;
                f.top < a && a < f.top + $(d).height() && ($(c).removeClass("header__item_active"), $(e).addClass("header__item_active"))
            })
        })
    };
    $(".js-nav-scroll").nav({offset: 150});


    //Countdown
    try {
        const a = new Date;
        a.setDate(a.getDay() ? a.getDate() - a.getDay() + 8 : a.getDate() + 1), a.setHours(0, 0, 0);
        new LightCountdown(".countdown-week", a, {animation: "animated flipInX", animationDuration: "600ms"})
    } catch (a) {
        console.error(a)
    }
});





const itemArr = Array.from(
  document.querySelectorAll(".section-steps__item_text")
);
function showArticle(num) {
  let text = itemArr[num - 1];
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
