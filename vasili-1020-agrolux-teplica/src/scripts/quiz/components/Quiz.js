import { QuizElements } from './QuizElements'
import { QuizResult } from './QuizResult'

const QUIZ_BODY_SELECTOR = '.modal-quiz__body'
const QUESTION_CONTAINER_SELECTOR = '.modal-quiz__questionContainer'

export class Quiz extends QuizElements {
  #currentStep = 0
  #amountOfSteps = null
  #discountValue = null

  constructor(quizData) {
    super(quizData)

    this.#setAmountIfSteps(this._questions.length)
    this.#setDiscountValue(this._quizData.discount.value)
    this.#initButtonsHandlers(this.#prevButtonHandler, this.#nextButtonHandler)
    this.#renderQuestion(this.#currentStep)
  }

  #setAmountIfSteps = (amount) => (this.#amountOfSteps = amount)

  #setDiscountValue = (value) => (this.#discountValue = value)

  #initButtonsHandlers = (prevButtonHandler, nextButtonHandler) => {
    this._buttons.setPrevCb(prevButtonHandler)
    this._buttons.setNextCb(nextButtonHandler)
  }

  #prevButtonHandler = () => this.#prevStep()

  #nextButtonHandler = () => this.#nextStep()

  #nextStep = () => this.#renderQuestion(++this.#currentStep)

  #prevStep = () => this.#renderQuestion(--this.#currentStep)

  #radioChangeInputHandler = () => this.#nextStep()

  #textChangeInputHandler = (event) =>
    event.target.value.trim()
      ? this._buttons.setNextDisabled(false)
      : this._buttons.setNextDisabled(true)

  #checkboxChangeInputHandler = (event) => {
    const inputsArr = Array.from(
      event.target
        .closest(QUESTION_CONTAINER_SELECTOR)
        .querySelectorAll('input')
    )
    !!inputsArr?.find((el) => el.checked)
      ? this._buttons.setNextDisabled(false)
      : this._buttons.setNextDisabled(true)
  }

  #renderQuestion = (step) => {
    if (step >= this.#amountOfSteps) {
      this.#renderFinishStep()
      return
    }
    if (step === 0) {
      this._buttons.hidePrev()
    } else {
      this._buttons.showPrev()
    }

    this._buttons.setNextDisabled(false)
    this._progress.setValue(((step / this.#amountOfSteps) * 100).toFixed())
    this._discount.setValue(
      ((this.#discountValue / this.#amountOfSteps) * step).toFixed()
    )
    this._expertComment.setComment(this._questions[step]?.comment)

    const inputsArr = this._questions[step].element.find('input').toArray()
    const isQuestionRequired = this._questions[step]?.required

    if (isQuestionRequired) {
      this._buttons.setNextDisabled(true)

      const isOneInputChecked = (inputsArr) =>
        !!inputsArr.filter((el) => el.checked).length

      const radioAndCheckboxLogic = (inputsArr, isRadio) =>
        isOneInputChecked(inputsArr)
          ? this._buttons.setNextDisabled(false)
          : inputsArr.forEach((el) => {
              el.addEventListener(
                'change',
                isRadio
                  ? this.#radioChangeInputHandler
                  : this.#checkboxChangeInputHandler
              )
            })

      const testInputLogic = (inputsArr) => {
        inputsArr[0].value.trim() && this._buttons.setNextDisabled(false)
        $(inputsArr[0]).on('input', this.#textChangeInputHandler)
      }

      const handlers = {
        radio: (inputsArr) => radioAndCheckboxLogic(inputsArr, true),
        checkbox: (inputsArr) => radioAndCheckboxLogic(inputsArr, false),
        text: (inputsArr) => testInputLogic(inputsArr),
        DEFAULT: () => this._buttons.setNextDisabled(false),
      }

      ;(handlers[inputsArr[0].getAttribute('type')] || handlers.DEFAULT)(
        inputsArr
      )
    }

    this.#showQuestion(step)
  }

  #showQuestion = (step) =>
    this._questions.forEach((question, index) =>
      index === step ? question.show() : question.hide()
    )

  #renderFinishStep = () =>
    this._$element
      .find(QUIZ_BODY_SELECTOR)
      .replaceWith(new QuizResult(this._quizData).element)
}
