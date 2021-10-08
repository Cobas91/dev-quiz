import Header from './components/Header'
import Question from './components/Question'
import { useState } from 'react'
import getTestData from './testDaten'
import Homepage from './components/Pages/Homepage'

export default function App() {
  const [questions, setQuestions] = useState(getTestData)

  return (
    <div className="App">
      <Header />
      <Homepage questions={questions} />
      <hr />
      <h2>Add Question Page</h2>
      <body>
        <form className="question">
          <textarea placeholder="Insert your Question here...." />
          <section>
            <div className="answer-1">
              <p>Answer 1</p>
              <input className="answer-1-text" />
              <p>Is Correct?</p>
              <input type="radio" className="isCorrect" />
            </div>
            <div className="answer-2">
              <p>Answer 2</p>
              <input className="answer-2-text" />
              <p>Is Correct?</p>
              <input type="radio" className="isCorrect" />
            </div>
            <button type="button">New answer</button>
          </section>
        </form>
      </body>
    </div>
  )
}
