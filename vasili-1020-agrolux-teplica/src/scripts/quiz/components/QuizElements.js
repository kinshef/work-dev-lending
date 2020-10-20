import $ from 'jquery'
import { Question } from './Question'
import { Discount } from './Discount'
import { ExpertComment } from './ExpertComment'
import { Progress } from './Progress'
import { Buttons } from './Buttons'

const QUIZ_TITLE_SELECTOR = '.modal-quiz__headerTitle'
const QUESTIONS_MOUNT_POINT_SELECTOR = '#modal-quiz__questionsMount'
const DISCOUNT_MOUNT_POINT_SELECTOR = '#modal-quiz__discountMount'
const EXPERT_MOUNT_POINT_SELECTOR = '#modal-quiz__expertMount'
const PROGRESS_MOUNT_POINT_SELECTOR = '#modal-quiz__progressMount'
const BUTTONS_MOUNT_POINT_SELECTOR = '#modal-quiz__buttonsMount'
const FORM_SELECTOR = '#modal-quiz__form'

export class QuizElements {
  _quizData = null
  _$element = null
  _questions = null
  _discount = null
  _expertComment = null
  _buttons = null
  _progress = null
  _$form = null

  constructor(quizData) {
    this._quizData = quizData
    this._$element = $(getModalLayout())
    this.#init()
  }

  #init = () => {
    const { title, questions, discount, expert } = this._quizData

    this.#initTitle(title)
    this.#initDiscount(discount)
    this.#initQuestions(questions)
    this.#initExpertComment(expert)
    this.#initButtons()
    this.#initProgress()
    this.#initForm()
  }

  #initTitle = (title) => {
    this._$element.find(QUIZ_TITLE_SELECTOR).text(title)
  }

  #initForm = () => {
    this._$form = this._$element.find(FORM_SELECTOR)
    this._$form.on('submit', (event) => event.preventDefault())
  }

  #initQuestions = (questionsData) => {
    this._questions = questionsData.map((questionData) => {
      const question = new Question(questionData)
      this._$element
        .find(QUESTIONS_MOUNT_POINT_SELECTOR)
        .append(question.hide().element)
      return question
    })
  }

  #initDiscount = (discountData) => {
    this._discount = new Discount(discountData)
    this._$element
      .find(DISCOUNT_MOUNT_POINT_SELECTOR)
      .replaceWith(this._discount.element)
  }

  #initExpertComment = (expertData) => {
    this._expertComment = new ExpertComment(expertData)
    this._$element
      .find(EXPERT_MOUNT_POINT_SELECTOR)
      .replaceWith(this._expertComment.element)
  }

  #initProgress = () => {
    this._progress = new Progress()
    this._$element
      .find(PROGRESS_MOUNT_POINT_SELECTOR)
      .replaceWith(this._progress.element)
  }

  #initButtons = () => {
    this._buttons = new Buttons()
    this._$element
      .find(BUTTONS_MOUNT_POINT_SELECTOR)
      .replaceWith(this._buttons.element)
  }

  appendToDOM = ($mountPoint = $('body')) => {
    $mountPoint.append(this._$element)
    return this
  }
}

const getModalLayout = () =>
  `
    <div class="modal fade modal-quiz" id="modal-quiz">
      <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div class="modal-content">
          <button type="button" class="close modal-quiz__close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <form id="modal-quiz__form" class="modal-quiz__form">
            <div class="modal-body modal-quiz__body">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-xl-9 modal-quiz__main">
                    <div class="modal-quiz__header">
                      <i class="fa fa-file-text-o"></i><span class="modal-quiz__headerTitle"></span>
                    </div>
                    <div class="modal-quiz__questionsMount" id="modal-quiz__questionsMount"></div>
                    <div class="modal-quiz__footer">
                      <div id="modal-quiz__progressMount"></div>
                      <div id="modal-quiz__buttonsMount"></div>
                    </div>
                  </div>
                  <div class="col-md-4 col-xl-3 modal-quiz__sidebar">
                    <div id="modal-quiz__discountMount"></div>
                    <div id="modal-quiz__expertMount"></div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `
