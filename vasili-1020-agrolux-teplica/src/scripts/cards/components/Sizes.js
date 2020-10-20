export const Sizes = (sizes) =>
  wrapper(
    sizes
      .map(([key, value], index) =>
        index === 0 ? size(key, value, true) : size(key, value)
      )
      .join('')
  )

const wrapper = (children) =>
  `<div class="product-card__sizes">
    <p>Шаг дуги</p>
    <div class="product-card__sizesContainer">${children}</div>
    <p>м</p>
  </div>`

const size = (key, value, active = false) =>
  `<div class="product-card__size ${
    active ? 'product-card__size--active' : ''
  }" data-product-price="${value}">${key}</div>`
