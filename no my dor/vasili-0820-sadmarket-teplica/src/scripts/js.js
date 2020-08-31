$(function () {

    var proverkaTel = function(formOtpr, data) {
        var boolProvTel = false;
        var toggleForm = function(){
            $('.provercaPhone-btn').toggleClass('d-block d-none');
            $('.provercaPhone-btnTwo').toggleClass('d-block d-none');
            $('.provercaPhone__textPhone').toggleClass('d-block d-none');
            $('.provercaPhone__inputPhone').toggleClass('d-block d-none');
        }
        $(".provercaPhone-btn__false").click(function (event) {
            event.preventDefault();
            toggleForm();
            $('.provercaPhone__inputPhone').focus();
        });
        if(formOtpr.id !== 'provercaPhone'){
            formOtprData = $(formOtpr).serializeArray()
            $(formOtpr).serializeArray().map(function(formData){
                if(formData['name'] === 'phone'){
                    $('#modal-proverca').modal('show');
                    document.querySelector('.provercaPhone__textPhone').textContent = formData['value'];
                    document.querySelector('.provercaPhone__inputPhone').value = formData['value'];
                }
            })
        }else{
            data.push.apply(data, formOtprData);
            var boolProvTel = true;
            $('#modal-proverca').modal('hide');
            toggleForm();
        }
        return boolProvTel;
    }

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

        // проверка телефона
        var formOtprData;
        if(!proverkaTel(this, data)){
            return false;
        }
        // проверка телефона end

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


    $(".catalog-toggle__btn").click(function () {
        var a = $(this).parent(".catalog-toggle").find(".catalog-toggle__container");
        a.length && a.slideToggle()
    })
});
document.addEventListener("DOMContentLoaded", function () {
    try {
        var a = document.querySelectorAll(".js-calculator-group-values");
        [].forEach.call(a, function (a) {
            a.addEventListener("click", function () {
                [].forEach.call(document.querySelectorAll("#section-catalog .has-calculator"), function (b) {
                    b.querySelector("input[name='" + a.dataset.name + "'][value='" + a.dataset.value + "']").checked = !0;
                    b.dispatchEvent(new Event("change"))
                })
            })
        })
    } catch (c) {
        console.error(c)
    }
});