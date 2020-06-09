$(function () {


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



    $(".owl-carousel-catalog").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        navText: ['<i class="fa fa-lg fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-lg fa-angle-right" aria-hidden="true"></i>'],
    });
    Array.prototype.forEach.call($(".section-catalog__cart-product"), function (item){
        $(".owl-carousel-catalog").on('changed.owl.carousel', function(event) {
            if(event.target === $(".owl-carousel-catalog", item)[0]){
                $(".catalog-slader-dot", item).removeClass('active');
                $(".catalog-slader-dot:nth-child("+(event.page.index+1)+")", item).addClass("active")
            }
        })
        $(".catalog-slader-dot", item).click(function(event){
            for(var i=0; i<$(".catalog-slader-dot", item).length; i++){
                if($(".catalog-slader-dot", item)[i] === event.target){
                    $(".owl-carousel-catalog", item).trigger('to.owl.carousel', i)
                }
            }
        })
    })
})

$("a.smoothscroll").click(function(a) {
    "" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
        scrollTop: $(a).offset().top
    }, 400))
});

document.addEventListener("DOMContentLoaded", function () {

});












