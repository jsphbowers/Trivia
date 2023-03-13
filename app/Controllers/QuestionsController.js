import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { questionsService } from "../Services/QuestionsService.js"



export class QuestionsController {
  constructor() {
    // console.log("oh yeah you are understanding it");

    // let data = fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    // console.log(data)

  }


  async getQuestions() {
    try {
      await questionsService.getQuestions()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}