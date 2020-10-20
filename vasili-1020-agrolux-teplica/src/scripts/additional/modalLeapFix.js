export default () => {
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth
  const $elements = $('.leap-fix')
  try {
    document.createEvent('TouchEvent')
  } catch (err) {
    $('.modal').each(function () {
      $(this).on('show.bs.modal', () =>
        setElementsPadding($elements, scrollBarWidth)
      )
      $(this).on('hidden.bs.modal', () => setElementsPadding($elements, 0))
    })
  }
  function setElementsPadding($elements, value) {
    $elements.each(function () {
      $(this).css('padding-right', `${value}px`)
    })
  }
}
