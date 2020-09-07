$(function () {

    $('.owl-reviews').owlCarousel({
        responsive: {
            375: {
                items: 1
            },
            1024: {
                items: 2
            },
            1025: {
                items: 3
            }
        },
        margin: 30,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-5x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-5x fa-angle-right" aria-hidden="true"></i>'],
        freeDrag: false,
        dots: false
    })

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
            value: "Belagrosad"
        });
        data.push({
            name: "title",
            value: "dvigateli"
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
            }, 400);
        }
    });

    //Fix nav
    $(window).scroll(function () {
        230 < $(window).scrollTop() ? $("#section-header").addClass("header__active") :
            $("#section-header").removeClass("header__active")
    });
    $(window).scroll();

});
document.addEventListener("DOMContentLoaded", function () {
    // tabs img to catalog
    Array.prototype.forEach.call(document.querySelectorAll('.catalog-castom-tab'), function (item) {
        var slaidActive = 0;
        var catalogTab = item.querySelectorAll('.catalog-tabs__tab');
        var updateSlaidActiveClass = function (a) {
            for (var i = 0; i < catalogTab.length; i++) {
                catalogTab[i].classList.remove('active');
                if (i === a) {
                    catalogTab[a].classList.add('active')
                };
            }
        }
        updateSlaidActiveClass(slaidActive);

        var catalogBtnTab = item.querySelectorAll('.catalog-btnTab__item');
        var updateDotActiveClass = function (a) {
            for (var i = 0; i < catalogBtnTab.length; i++) {
                catalogBtnTab[i].classList.remove('active');
                if (i === a) {
                    catalogBtnTab[a].classList.add('active')
                }
            }
        }
        updateDotActiveClass(slaidActive);

        var catalogBtnTabs = item.querySelector('.catalog-btnTab');
        catalogBtnTabs.onclick = function (event) {
            if (event.target && event.target.tagName == 'IMG') {
                for (let i = 0; i < catalogBtnTab.length; i++) {
                    if (event.target == catalogBtnTab[i].querySelector('img')) {
                        slaidActive = i;
                        updateSlaidActiveClass(i);
                        updateDotActiveClass(i);
                    }
                }
            }
        }
    })

});