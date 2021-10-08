import * as React from 'react'
import Question from '../Question'

export default function Homepage({ questions }) {
  return (
    <div>
      {questions.map(question => (
        <Question question={question} key={question.questionID} />
      ))}
    </div>
  )
}
