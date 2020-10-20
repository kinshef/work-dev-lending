import {Quiz} from './components/Quiz'

export default () => new Quiz(quizData).appendToDOM($('body'))