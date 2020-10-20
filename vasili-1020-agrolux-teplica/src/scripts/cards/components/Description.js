export const Description = (description) =>
  `<div class="product-card__description">
      ${description
        .map(([key, value]) => `<p>${key}: <b>${value}</b></p>`)
        .join('')}
  </div>`
