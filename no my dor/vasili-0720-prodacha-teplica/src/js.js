$(function() {

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
                    scrollTop: $(hash).offset().top - 200
                },
                400
            );
        }
    });

});
document.addEventListener("DOMContentLoaded", function() {
    
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

})

window.onload = function () {

    // animate block sale in header
    var block = document.getElementById("section-header"),
        moveBlock = document.getElementById("saleBlock"),
        text = document.getElementById("saleText"), 
        maxClientX = 800, 
        maxClientY = 300;

        // set default animate delay 
        text.style.transition = "1s";
        moveBlock.style.transition = "2s";

    function blockStop() {
        moveBlock.style.transform = `translate(${0}px,${0}px)`;
        text.style.transform = `translate(${-50}%,${-50}%)`;
    }

    function blockMove(event) {
        moveBlock.style.transform = `translate(${-event.clientX/2}px,${-event.clientY/2}px)`;
        text.style.transform = `translate(${-event.clientX/5}px,${-event.clientY/5}px)`;
    }
        
    block.addEventListener("mousemove", function (event) {
        blockMove(event);

        if (event.clientX > maxClientX || event.clientY > maxClientY) {
            blockStop();
        }
    }); 
    
    block.addEventListener("mouseout", function () {
        blockStop();
    });
    
    
    $("#navToggle").click(function () {
        $(this).toggleClass("active"); 
        $(".overlay").toggleClass("open"); 
        $("body").toggleClass("locked");
    });

};