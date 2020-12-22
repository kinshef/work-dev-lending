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

        // console.log(JSON.stringify(data));
        // return false; // Testing

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
        if (typeof (Event) === 'function') {
            document.dispatchEvent(new Event('app.form.send'));
        } else {
            var ev = document.createEvent('Event');
            ev.initEvent('app.form.send', false, false);
            document.dispatchEvent(ev);
        }

        // console.log(JSON.stringify(data));
        // return false;
    });

    //Show popup when user leave site
    $("body").mouseleave(function (event) {
        if (typeof sessionStorage !== "undefined") {
            if (!sessionStorage.getItem("modalLeaveShowed") && event.clientY < -12) {
                sessionStorage.setItem("modalLeaveShowed", "true");
                $("#modal-leave").modal("show");
            }
        }
    });

    //Show modal '#modal-leave' after 60 sec delay
    setTimeout(function () {
        if (typeof sessionStorage !== "undefined") {
            if (!sessionStorage.getItem("modalLeaveShowed")) {
                sessionStorage.setItem("modalLeaveShowed", "true");
                $("#modal-leave").modal("show");
            }
        }
    }, 60000);

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

    //mobile menu behavior
    $('.navbar__open').click(function () {
        $('.header__navbar').addClass('show');
    });
    $('.navbar__close').click(function () {
        $('.header__navbar').removeClass('show');
    });
    $('.nav__link').click(function () {
        $('.header__navbar').removeClass('show');
        $('#menu').prop('checked', false);
    });

    // owl-carousel settings
    $(".owl-carousel-products-img").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoHeight: true,
        navText: ['<i class="fa fa-lg fa-2x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-lg fa-2x fa-angle-right" aria-hidden="true"></i>'],
    });
});