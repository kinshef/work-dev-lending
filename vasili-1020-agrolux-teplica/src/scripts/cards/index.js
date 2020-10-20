import { createCard } from './functions/createCard'
import { changeProductPrice } from './functions/changeProductPrice'
import { CARD_SIZES_SELECTOR, CARD_SIZE_CLASS, CARD_SIZE_ACTIVE_CLASS } from './types'

export default () => {


  products.forEach((product) => {
    const $card = createCard(product)
    const $cardSizes = $card.find(CARD_SIZES_SELECTOR)
    let $activeSizeButton = $cardSizes.find(`.${CARD_SIZE_ACTIVE_CLASS}`)
    $cardSizes.on('click', onPriceClickHandler)
    $(product.mountPoint).append($card)

    function onPriceClickHandler(event) {
      if ($(event.target).hasClass(CARD_SIZE_CLASS)) {
        changeActiveSizeButton($(event.target))
        changeProductPrice(
          $card,
          $(event.target).data('product-price'),
          product.onSale
        )
      }
    }

    function changeActiveSizeButton($nextButton) {
      $nextButton.addClass(CARD_SIZE_ACTIVE_CLASS)
      $activeSizeButton.removeClass(CARD_SIZE_ACTIVE_CLASS)
      $activeSizeButton = $nextButton
    }
  })
}
