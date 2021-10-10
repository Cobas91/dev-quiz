import * as React from 'react'
import styled from 'styled-components/macro'
import { isValidElement, useEffect, useState } from 'react'

export default function NewAnswerElement({
  inCommingAnswer,
  index,
  handleChangeAnswer,
  inCommingCorrect,
}) {
  const [answer, setAnswer] = useState(inCommingAnswer)
  const [correct, setCorrect] = useState(inCommingCorrect)

  const handleIsCorrectChange = event => {
    setCorrect(true)
    setAnswer({ ...answer, correct: correct })
    handleChangeAnswer(answer, index)
  }

  const handleAnswerText = event => {
    setAnswer({ ...answer, answerText: event.target.value })
    handleChangeAnswer(answer, index)
  }

  return (
    <AnswerElement>
      <p>Answer {index + 1}</p>
      <AnswerText
        value={inCommingAnswer.answerText}
        onChange={e => handleAnswerText(e)}
      />
      <p>Is Correct?</p>
      <IsCorrectButton
        type="radio"
        value={index}
        onChange={e => handleIsCorrectChange(e)}
        name="add-question"
        checked={inCommingCorrect}
      />
    </AnswerElement>
  )
}

const AnswerElement = styled.div``

const AnswerText = styled.textarea``

const IsCorrectButton = styled.input``
