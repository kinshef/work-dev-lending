import {Price} from '../components/Price'
import {CARD_PRICES_SELECTOR} from '../types'
export const changeProductPrice = ($card, price, onSale) =>
  $card.find(CARD_PRICES_SELECTOR).replaceWith(Price(price, onSale))
