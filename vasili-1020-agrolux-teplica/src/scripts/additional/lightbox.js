import lightbox from 'lightbox2'

export default () => lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  albumLabel: 'Изображение %1 из %2',
  alwaysShowNavOnTouchDevices: true,
})