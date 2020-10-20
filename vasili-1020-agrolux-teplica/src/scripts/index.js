// import '@babel/polyfill'
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'lightbox2/dist/css/lightbox.min.css'
import '../style/main.scss'
import $ from 'jquery'
window.$ = $
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import forms from './additional/forms'
import lightbox from './additional/lightbox'
import slider from './additional/slider'
import modalLeapFix from './additional/modalLeapFix'
import quiz from './quiz/'
import cards from './cards'

window.addEventListener('DOMContentLoaded', () => {
  forms()
  quiz()
  modalLeapFix()
  cards()
  lightbox()
  slider()
})