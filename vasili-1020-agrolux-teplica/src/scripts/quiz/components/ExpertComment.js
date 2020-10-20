import $ from 'jquery'
const COMMENT_CONTAINER_SELECTOR = '.modal-quiz__expertComment'

export class ExpertComment {
  #$element = null
  #$commentContainer = null
  #expertInfo = null
  #comment = ''
  constructor(expertInfo) {
    this.#expertInfo = expertInfo
    this.#$element = $(getCommentLayout(this.#expertInfo, this.#comment))
    this.#$commentContainer = this.#$element.find(COMMENT_CONTAINER_SELECTOR)
  }
  get element() {
    return this.#comment ? this.show().#$element : this.hide().#$element
  }

  hide() {
    this.#$element.hide()
    return this
  }
  show() {
    this.#$element.show()
    return this
  }

  setComment(comment) {
    this.#comment = comment
    this.#comment ? this.show() : this.hide()
    this.#$commentContainer.text(comment)
    return this
  }
}

const getCommentLayout = (expertInfo, comment) => {
  const { photo, name, position } = expertInfo
  return wrapper(info(photo, name, position) + commentBlock(comment))

  function wrapper(children) {
    return `
      <div class="modal-quiz__expert">
        ${children}
      </div>
    `
  }

  function info(photo, name, position) {
    return `
      <div class="modal-quiz__expertInfo">
        <div class="modal-quiz__expertPhoto">
          <img src="${photo}" />
        </div>
        <div class="modal-quiz__expertDescription">
          <p class="modal-quiz__expertName">${name}</p>
          <p class="modal-quiz__expertPosition">${position}</p>
        </div>
      </div>
    `
  }

  function commentBlock(comment) {
    return `
      <div class="modal-quiz__expertComment">
        ${comment}
      </div>
    `
  }
}
