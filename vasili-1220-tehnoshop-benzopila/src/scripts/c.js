$(document).ready(function () {
    $(".jPrices").change(function () {
        let currentCard = this;

        let currentPrice = Number($('.jPrice', currentCard).text());
        let oldPriceBlock = $('.jPriceOld', currentCard);

        oldPriceBlock.text((currentPrice * 1.2).toFixed());
    });
    $(".jPrices").change();
});