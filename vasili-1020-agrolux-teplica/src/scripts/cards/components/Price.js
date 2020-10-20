export const Price = (price, onSale = true) =>
  `<div class="product-card__prices">
    ${onSale ? salePrice(price) : ''}
    <div class="product-card__priceSale">${price.toFixed(0)} руб</div>
  </div>`

const salePrice = (price) =>
  `<div class="product-card__priceMain">${(price * 1.35).toFixed(0)} руб</div>`
