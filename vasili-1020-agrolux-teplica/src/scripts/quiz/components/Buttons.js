import $ from 'jquery'

const PREV_BTN_SELECTOR = '.modal-quiz__footerButton--prev'
const NEXT_BTN_SELECTOR = '.modal-quiz__footerButton--next'
const BTN_DISABLED_CLASS = 'modal-quiz__footerButton--disabled'

export class Buttons {
  #$element = null
  #$prevButtonEl = null
  #$nextButtonEl = null
  constructor() {
    this.#$element = $(getButtonsLayout())
    this.#$prevButtonEl = this.#$element.find(PREV_BTN_SELECTOR)
    this.#$nextButtonEl = this.#$element.find(NEXT_BTN_SELECTOR)
  }

  setPrevCb(prevCb = () => null) {
    this.#$prevButtonEl.on('click', prevCb)
    return this
  }

  setNextCb(nextCb = () => null) {
    this.#$nextButtonEl.on('click', nextCb)
    return this
  }

  setNextDisabled(flag) {
    flag
      ? this.#$nextButtonEl.addClass(BTN_DISABLED_CLASS)
      : this.#$nextButtonEl.removeClass(BTN_DISABLED_CLASS)
    return this
  }

  hidePrev() {
    this.#$prevButtonEl.css('visibility', 'hidden')
    return this
  }
  showPrev() {
    this.#$prevButtonEl.css('visibility', 'visible')
    return this
  }
  hideNext() {
    this.#$nextButtonEl.css('visibility', 'hidden')
    return this
  }
  showNext() {
    this.#$nextButtonEl.css('visibility', 'visible')
    return this
  }

  get element() {
    return this.#$element
  }
}

const getButtonsLayout = () => {
  return `
    <div class="modal-quiz__footerButtons">
      <button class="btn modal-quiz__footerButton modal-quiz__footerButton--prev" type="button">
        <i class="fa fa-long-arrow-left"></i>
      </button>
      <button class="btn modal-quiz__footerButton modal-quiz__footerButton--next" type="button">
        Далее 
        <i class="fa fa-long-arrow-right"></i>
      </button>
    </div>
  `
}
