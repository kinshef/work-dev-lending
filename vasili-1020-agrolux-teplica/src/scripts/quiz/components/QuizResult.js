import $ from 'jquery'
import { Discount } from './Discount'
import quiz from '..'

const SIDEBAR_SELECTOR = '.modal-quiz__sidebar'
const FORM_SELECTOR = '#modal-quiz__form'
const DISCOUNT_MOUNT_POINT_SELECTOR = '.discount-mount'
const FINISH_SCREEN_MOUNT_POINT_SELECTOR =
  '#modal-quiz .modal-quiz__body--result'

export class QuizResult {
  #quizData = null
  #discount = null
  #$element = null
  #$form = null
  #formInfo = null
  constructor(quizData) {
    this.#quizData = quizData
    this.#$element = $(getResultScreenLayout(this.#quizData.resultText))
    this.#initDiscount(this.#quizData.discount)
    this.#$form = $(FORM_SELECTOR)
    this.#formInfo = this.#$form.serializeArray()
    this.#$form.on('submit', this.#formHandler)
  }

  #formHandler = (event) => {
    event.preventDefault()

    const data = [
      ...this.#$form.serializeArray(),
      ...this.#formInfo,
      {
        name: 'source',
        value: quizData.request.source,
      },
      {
        name: 'title',
        value: quizData.request.title,
      },
      {
        name: 'link',
        value: location.href,
      },
    ]

    const $finishScreen = $(
      getFinishScreenLayout(this.#quizData.finishTextSuccess)
    )
    $finishScreen
      .find(DISCOUNT_MOUNT_POINT_SELECTOR)
      .replaceWith(this.#discount.element)

    $.ajax({
      type: 'POST',
      url: this.#quizData.request.URL,
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      dataType: 'json',
      data,
    })
      .done(function () {
        $(FINISH_SCREEN_MOUNT_POINT_SELECTOR).replaceWith($finishScreen)
      })
      .fail(function (error, textStatus) {
        console.log(error, textStatus)
        alert(this.#quizData.finishTextError)
      })
  }

  #initDiscount = (discountData) => {
    this.#discount = new Discount(discountData).setValue(discountData.value)
    this.#$element.find(SIDEBAR_SELECTOR).prepend(this.#discount.element)
  }
  get element() {
    return this.#$element
  }
}

function getResultScreenLayout(resultText) {
  return `
    <div class="modal-body modal-quiz__body modal-quiz__body--result">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 modal-quiz__main">
            <p>${resultText}</p>
          </div>
          <div class="col-lg-5 modal-quiz__sidebar">
            <div class="modal-quiz__submitContainer">
              <div class="form-group">
                <input type="text" name="name" class="form-control" placeholder="Ваше имя" />
              </div>
              <div class="form-group">
                <input type="tel" name="phone" class="form-control" placeholder="Номер телефона" required />
              </div>
              <div class="form-group text-center text-lg-left">
                <button type="submit" class="btn btn-regular btn-lg">
                  Получить скидку
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

function getFinishScreenLayout(finishTextSuccess) {
  return `
    <div class="modal-body modal-quiz__body modal-quiz__body--finish">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 modal-quiz__main">
            <h3>Спасибо!</h3>
            <p>${finishTextSuccess}</p>
            <div class="discount-mount"></div>
          </div>
        </div>
      </div>
    </div>
  `
}
