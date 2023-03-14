


export class Question {

  constructor(data) {
    this.difficulty = data.difficulty
    this.category = data.category
    this.type = data.type
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
  }


  get questionTemplate() {
    return `
    <div class="col-12 p-2">
    <div class="card elevation-1 p-3 qtitle">
      <h3 class="">Question:</h3>
    </div>
  </div>
  <div class="col-12 p-2">
    <div class="card elevation-2 p-3">
      ${this.question}
    </div>
  </div>
  <div class="col-12 d-flex justify-content-between">
    <button class="card text-center p-3 btn" onclick="app.questionsController.checkAnswer('a1')">
      <h5 id="a1">${this.computeRandomAnswers.answers[0]}</h5>
    </button>
    <button class="card text-center p-3 btn" onclick="app.questionsController.checkAnswer('a2')">
      <h5 id="a2">${this.computeRandomAnswers.answers[1]}</h5>
    </button>
    <button class="card text-center p-3 btn" onclick="app.questionsController.checkAnswer('a3')">
      <h5 id="a3">${this.computeRandomAnswers.answers[2]}</h5>
    </button>
    <button class="card text-center p-3 btn" onclick="app.questionsController.checkAnswer('a4')">
      <h5 id="a4">${this.computeRandomAnswers.answers[3]}</h5>
    </button>
  </div>
    `
  }
  get computeRandomAnswers() {
    let answers = this.incorrect_answers.push(this.correct_answer)
    answers.forEach(a => )
    return answers

  }
}