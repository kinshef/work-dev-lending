$(function () {

    $('.owl-reviews').owlCarousel({
        responsive : {
            375 : {
                items:1
            },
            1024 : {
                items:2
            },
            1025 : {
                items:3
            }
        },
        margin: 30,
        loop:true,
        nav:true,
        navText: ['<i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>'],
        freeDrag: false,
        dots:true
    })


    $('.owl-specifications').owlCarousel({
        items:1,
        margin: 30,
        loop:true,
        nav:true,
        freeDrag: false,
        navText: ['<i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>'],
        dots:true,
        autoHeight:true
    });
    Array.prototype.forEach.call($(".specifications-slaider"), function (item){
        $(".owl-specifications").on('changed.owl.carousel', function(event) {
            if(event.target === $(".owl-specifications", item)[0]){
                $(".specifications-slader-dot", item).removeClass('active');
                $(".specifications-slader-dot:nth-child("+(event.page.index+1)+")", item).addClass("active")
            }
        })
        $(".specifications-slader-dot", item).click(function(event){
            for(var i=0; i<$(".specifications-slader-dot", item).length; i++){
                if($(".specifications-slader-dot", item)[i] === event.target){
                    $(".owl-specifications", item).trigger('to.owl.carousel', i)
                }
            }
        })
    })


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

})

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

});












