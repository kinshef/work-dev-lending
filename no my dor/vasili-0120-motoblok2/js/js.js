$(function() {
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






