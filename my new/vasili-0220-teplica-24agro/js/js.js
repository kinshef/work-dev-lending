$(function () {

    // Form submit
    $("form").submit(function (event) {
        event.preventDefault()

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
            value: "Agropapa"
        });
        data.push({
            name: "title",
            value: "Перезвонить по сварке"
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
            beforeSend: function () {
                new Noty({
                    text: 'Отправка запроса...',
                    type: 'information'
                }).show();
            }
        }).done(function (response) {
            new Noty({
                text: response.text,
                type: response.type,
                timeout: 10000,
                killer: true
            }).show();
        }).fail(function (error, textStatus) {
            console.log(textStatus);
            new Noty({
                text: 'Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!',
                type: 'error',
                killer: true
            }).show();
        });

        try {
            ym(55862806, 'reachGoal', 'form_send');
        }catch (error) {console.log(error)}
        return false
    });

    // $("body").mouseleave(function (event) {
    //     if (typeof sessionStorage !== "undefined") {
    //         if (!sessionStorage.getItem("modalLeaveShowed") && event.clientY < -12) {
    //             sessionStorage.setItem("modalLeaveShowed", "true");
    //             $("#modal-leave").modal("show");
    //         }
    //     }
    // });


    // Smooth scroll
    $("a.smoothscroll").click(function (event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 100
            },
                400
            );
        }
    });


})

document.addEventListener("DOMContentLoaded", function () {
    try {
        /* countdown */
        let dateEnd = new Date();
        dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
        dateEnd.setHours(0, 0, 0);
        let countdown = new LightCountdown(".countdown-week", dateEnd, {animation: "animated flipInX", animationDuration: "600ms"});
    } catch (e) {console.error(e);}


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




});












