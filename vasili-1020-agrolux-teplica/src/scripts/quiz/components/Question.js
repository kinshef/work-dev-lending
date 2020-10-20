import $ from 'jquery'

export class Question {
  #$element = null
  #questionData = null
  constructor(questionData) {
    this.#questionData = questionData
    this.#$element = $(getQuestionLayout(this.#questionData))
  }

  get element() {
    return this.#$element
  }

  get required() {
    return !!this.#questionData.required
  }

  get comment() {
    return this.#questionData.comment
  }

  hide() {
    this.#$element.hide()
    return this
  }
  show() {
    this.#$element.show()
    return this
  }
}

const getQuestionLayout = (questionData) => {
  const { title, name, label, type, options } = questionData

  const handlers = {
    text: (placeholder, name) => getTextInput(placeholder, name),
    'image-radio': (image, title, name) =>
      getImageRadioInput(image, title, name),
    'image-checkbox': (image, title, name) =>
      getImageCheckboxInput(image, title, name),
    radio: (title, name) => getRadioInput(title, name),
    checkbox: (title, name) => getCheckboxInput(title, name),
  }

  return getWrapper(
    getTitle(title) + getLabel(label) + getQuestions(type, name, options)
  )

  function getWrapper(children) {
    return `
      <div class="modal-quiz__question">
        ${children}
      </div>
    `
  }

  function getTitle(title) {
    return `
      <p class="modal-quiz__questionTitle">
        ${title}
      </p>
    `
  }

  function getLabel(label) {
    return `
      <div class="modal-quiz__questionLabel">
        ${label || ''}
      </div>
    `
  }

  function getQuestions(type, name, options) {
    return `
    <div class="modal-quiz__questionContainer">
      ${options.map((option) => handlers[type]({ ...option, name })).join('')}
    </div>
    `
  }

  function getTextInput({ placeholder, name }) {
    // return `
    //   <label class="modal-quiz__questionInput modal-quiz__questionInput--text">
    //   <div class="form-group">
    //     <input class="form-control" type="text" name="${name}" placeholder="${placeholder}">
    //     </div>
    //   </label>
    // `
    return `
    <div class="form-group modal-quiz__questionInput modal-quiz__questionInput--text">
      <input class="form-control" type="text" name="${name}" placeholder="${placeholder}">
    </div>
  `
  }

  function getRadioInput({ title, name }) {
    return `
      <label class="modal-quiz__questionInput modal-quiz__questionInput--radio">
        <input type="radio" name="${name}" value="${title}">
        <span class="modal-quiz__questionMark"></span>
        <span class="modal-quiz__questionText">${title}</span>
      </label>
    `
  }

  function getCheckboxInput({ title, name }) {
    return `
      <label class="modal-quiz__questionInput modal-quiz__questionInput--checkbox">
        <input type="checkbox" name="${name}" value="${title}">
        <span class="modal-quiz__questionMark"></span>
        <span class="modal-quiz__questionText">${title}</span>
      </label>
    `
  }

  function getImageRadioInput({ image, title, name }) {
    return `
      <label class="modal-quiz__questionInput modal-quiz__questionInput--image modal-quiz__questionInput--imageRadio">
        <input type="radio" name="${name}" value="${title}">
          <img src="${image}" class="img_fluid w-100" />
          <span class="modal-quiz__questionMark"></span>
          <span class="modal-quiz__questionText">${title}</span>
      </label>`
  }

  function getImageCheckboxInput({ image, title, name }) {
    return `
      <label class="modal-quiz__questionInput modal-quiz__questionInput--image modal-quiz__questionInput--imageCheckbox">
        <input type="checkbox" name="${name}" value="${title}">
        <img src="${image}" class="img_fluid w-100" />
        <span class="modal-quiz__questionMark"></span>
        <span class="modal-quiz__questionText">${title}</span>
      </label>
    `
  }
}
