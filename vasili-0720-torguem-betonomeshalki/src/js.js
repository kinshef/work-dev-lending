$(function() {
	$.noty.defaults.theme="defaultTheme";
	$.noty.defaults.layout="top";
    
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


    $('.b-polygon').mouseover(function(elem){
        $('.b-polygon').removeClass('active');
        $('.catalog-shadow').removeClass('active');
        $('.b-polygon').parent().css('z-index', '0')
        if(document.body.clientWidth>1199){
            elem.currentTarget.classList.add('active');
            elem.currentTarget.nextElementSibling.classList.add('active');
            elem.currentTarget.parentElement.style.zIndex = '1';
        }
    })

    $('#section-catalog .catalogBtn').click(function(){
        $('#modal-order').modal('show');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    
});

var app= {
	h: "cHJvbW8uYWdyb2NhdGFsb2cuYnk="
};