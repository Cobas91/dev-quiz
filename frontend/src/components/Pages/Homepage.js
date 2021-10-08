import * as React from 'react'
import styled from 'styled-components/macro'
import Question from '../Question'

export default function Homepage({ questions }) {
  console.log('Homepage:', questions)
  return (
    <body>
      {questions.map(question => (
        <Question question={question} />
      ))}
    </body>
  )
}
