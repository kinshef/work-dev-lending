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

$(document).ready(function () {

    var proverkaTel = function(form) {
        var boolProvTel = false;
        if(form.id !== 'provercaPhone'){
            $(form).serializeArray().map(function(form){
                if(form['name'] === 'phone'){
                    console.log(form['value']);
                }
            })
        }else{
            var boolProvTel = true;
        }
        return boolProvTel;
    }


    // Form submit
    $("form").submit(function (event) {
        event.preventDefault();


        // проверка телефона
        if(!proverkaTel(this)){
            return false;
        }
        // проверка телефона end

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

        console.log(JSON.stringify(data));
        return false; // Testing

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


    $(".modal").on("shown.bs.modal", function () {
        window.location.hash = "modal"
    });
    $(".modal").on("hide.bs.modal", function (a) {
        "#modal" === window.location.hash && history.replaceState(null, null, " ")
    });
    $(window).on("hashchange", function (a) {
        "#modal" !== window.location.hash && $(".modal").modal("hide")
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
                    scrollTop: $(hash).offset().top
                },
                400
            );
        }
    });



    // if ("function" === typeof URL) {
    //     var c = new URL(window.location.href),
    //         b = c.searchParams.get("length");
    //     b && (b = document.querySelector('a[data-name="length"][data-value="' + b + '"]')) && b.dispatchEvent(new Event("click"));
    //     if (b = c.searchParams.get("interval")) console.log(b), (b = document.querySelector('a[data-name="interval"][data-value="' + b + '"]')) && b.dispatchEvent(new Event("click"));
    //     if (c = c.searchParams.get("comparison"))
    //         if (b = document.querySelector(".js-comparison")) b.textContent = c
    // }
});

document.addEventListener("DOMContentLoaded", function () {

    // try {
    //     var c = document.querySelectorAll(".filter__buttons .filter__button__custom");
    //     [].forEach.call(c, function (a) {
    //         a.addEventListener("click", function () {
    //             var b = a.closest(".filter__buttons__group");
    //             Array.prototype.forEach.call(b.querySelectorAll(".filter__button__custom"), function (a) {
    //                 a.classList.remove("active")
    //             });
    //             a.classList.add("active");
    //             [].forEach.call(document.querySelectorAll("#filter .has-calculator"), function (b) {
    //                 b.querySelector("input[name='" +
    //                     a.dataset.name + "'][value='" + a.dataset.value + "']").checked = !0;
    //                 b.dispatchEvent(new Event("change"))
    //             })
    //         })
    //     })
    // } catch (a) {
    //     console.error(a)
    // }


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




});

window.addEventListener("DOMContentLoaded", function () {






//     try {
//         var c = {},
//             b = new Isotope("#filter", {
//                 layoutMode: "fitRows"
//             }),
//             a = document.querySelectorAll(".filter__buttons [data-filter]");
//         Array.prototype.forEach.call(a, function (a) {
//             a.onclick = function () {
//                 var d = a.closest(".filter__buttons__group");
//                 Array.prototype.forEach.call(d.querySelectorAll("[data-filter]"), function (a) {
//                     a.classList.remove("active")
//                 });
//                 a.classList.add("active");
//                 c[d.dataset.group] = a.dataset.filter;
//                 d = Object.values(c).join("");
//                 b.arrange({
//                     filter: d
//                 })
//             }
//         });
//         b.on("arrangeComplete",
//             function (a) {
//                 0 === a.length ? document.getElementById("filter-alert").removeAttribute("hidden") : document.getElementById("filter-alert").setAttribute("hidden", "")
//             })
//     } catch (d) {
//         console.error(d)
//     }
});