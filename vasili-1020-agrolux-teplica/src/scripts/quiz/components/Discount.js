import $ from 'jquery'
const VALUE_CONTAINER_SELECTOR = '.modal-quiz__discountValue'

export class Discount {
  #$element = null
  #$valueContainer = null
  #discountData = null
  #value = ''
  constructor(discountData) {
    this.#discountData = discountData
    this.#$element = $(getDiscountLayout(this.#discountData, 0))
    this.#$valueContainer = this.#$element.find(VALUE_CONTAINER_SELECTOR)
  }

  get element() {
    return this.#$element
  }
  hide() {
    this.#$element.hide()
    return this
  }
  show() {
    this.#$element.show()
    return this
  }

  setValue(value) {
    this.#value = value
    this.#$valueContainer.text(value)
    return this
  }
}

const getDiscountLayout = (discountData, initValue = 0) => {
  const { unit, text } = discountData
  return discountWrapper(discountText(text) + discountLabel(unit, initValue))

  function discountWrapper(children) {
    return `
      <div class="modal-quiz__discount">
        ${children}
      </div>
    `
  }

  function discountText(value) {
    return `
      <div class="modal-quiz__discountText">
        ${value}
      </div>
    `
  }

  function discountLabel(unit, initValue) {
    return `
      <div class="modal-quiz__discountLabel">
        <span class="modal-quiz__discountValue">${initValue.toFixed()}</span>
        <span class="modal-quiz__discountPercent">${unit}</span>
      </div>
    `
  }
}
