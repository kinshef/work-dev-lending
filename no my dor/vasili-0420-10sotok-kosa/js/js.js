$(function(){

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


$('[data-toggle="popover"]').popover();
    $("#modal-order").on("show.bs.modal", function(b) {
        b = $(b.relatedTarget).closest(".modal");
        0 < b.length && b.modal("hide")
    });

$(".owl-carousel-prodyctsImg").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: ["<", ">"]
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var product_cardPrices = document.querySelectorAll('.product_card-prices');
    for(var i=0; i<product_cardPrices.length;i++){
        if(product_cardPrices[i].querySelector('.product_card-price-old span')){
            product_cardPrices[i].querySelector('.product_card-price-old span').textContent= (Number(product_cardPrices[i].querySelector('.product_card-price span').innerHTML)/100*70).toFixed(2);
       }
    }

    var cardText = document.querySelectorAll('.card.product_card--shadow>.card-body>.card-text');
    var maxHidP = 0;
    for(var i=0; i<cardText.length;i++){
        if(maxHidP<cardText[i].scrollHeight){
            maxHidP = cardText[i].scrollHeight;
            for(var j=0; j<cardText.length;j++){
                cardText[j].style.height = maxHidP + 'px';
            } 
        }
    }
});