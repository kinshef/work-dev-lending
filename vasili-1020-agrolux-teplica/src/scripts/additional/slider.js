import 'swiper/swiper-bundle.min.css'
import Swiper from 'swiper/swiper-bundle.min.js'

export default () => {
  if (!Number.isNan) {
    Object.defineProperty(Number, 'isNaN', {
      value: function (value) {
        return value !== value
      },
    })
  }

  new Swiper('.section-reviews__slider', {
    speed: 1000,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}
