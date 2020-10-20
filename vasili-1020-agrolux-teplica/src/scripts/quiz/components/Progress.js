import $ from 'jquery'
const VALUE_CONTAINER_SELECTOR = '.modal-quiz__progressValue'
const FILL_ELEMENT_SELECTOR = '.modal-quiz__progressBarFill'

export class Progress {
  #$element = null
  #value = 0
  #$valueContainer = null
  #$fillElement = null
  constructor(initValue = 0) {
    this.#value = initValue
    this.#$element = $(getProgressLayout(this.#value))
    this.#$valueContainer = this.#$element.find(VALUE_CONTAINER_SELECTOR)
    this.#$fillElement = this.#$element.find(FILL_ELEMENT_SELECTOR)
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
    this.#$valueContainer.text(`${this.#value}%`)
    this.#$fillElement.css('width', `${this.#value}%`)
    return this
  }
}

const getProgressLayout = (initValue) => {
  return progressWrapper(progressInfo(initValue) + progressBar(initValue))

  function progressWrapper(children) {
    return `
      <div class="modal-quiz__progress">
        ${children}
      </div>
    `
  }

  function progressInfo(initValue) {
    return `
    <div class="modal-quiz__progressInfo">
      <div class="modal-quiz__progressTitle">Завершено:</div>
      <div class="modal-quiz__progressValue">${initValue}%</div>
    </div>
    `
  }

  function progressBar(initValue) {
    return `
    <div class="modal-quiz__progressBar">
      <div class="modal-quiz__progressBarFill" style="width: ${initValue}%;"></div>
    </div>
    `
  }
}
