


class QuestionsService {
  async getQuestions() {

  }

  async getQuestionsWithFetch() {
    let response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    let data = await response.json()
    console.log('this is service', data)
  }

}

export const questionsService = new QuestionsService()