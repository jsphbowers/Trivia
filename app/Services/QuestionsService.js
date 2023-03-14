import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"



class QuestionsService {
  checkAnswer(answerID) {
    let currentQuestion = appState.questions.find(q => q.correct_answer == answerID)
    if (answerID = currentQuestion?.correct_answer) {
      appState.correct++
    } else {
      appState.wrong++
    }
  }

  async getQuestionsWithFetch() {
    let response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    let data = await response.json()
    console.log('this is service', data)
  }
  async getQuestions() {
    let response = await axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    // console.log('axios', response);
    appState.questions = response.data.results.map(question => new Question(question))
    console.log(appState.questions, 'da questions')
  }

}

export const questionsService = new QuestionsService()