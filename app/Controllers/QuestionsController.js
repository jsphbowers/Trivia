import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { questionsService } from "../Services/QuestionsService.js"
import { setHTML } from "../Utils/Writer.js";


function _drawQuestions() {
  let questions = appState.questions
  let template = ''
  let num = Math.floor(Math.random() * questions.length)
  console.log(num)
  template += questions[num].questionTemplate
  // questions.forEach(question => template += question.questionTemplate)
  setHTML('questions', template)
}

export class QuestionsController {
  constructor() {
    // console.log("oh yeah you are understanding it");

    // let data = fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    // console.log(data)
    appState.on('questions', _drawQuestions)
    this.getQuestions()

  }


  async getQuestions() {
    try {
      await questionsService.getQuestions()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  checkAnswer(answerID) {
    console.log('you clicked it')
    questionsService.checkAnswer(answerID)
  }
}