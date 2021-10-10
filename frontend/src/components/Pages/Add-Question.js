import * as React from 'react'
import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'
import NewAnswerElement from '../NewAnswerElement'
export default function AddQuestion() {
  const [answerOptions, setAnswerOptions] = useState([
    { answerText: 'Erste Antwort', correct: true },
    { answerText: 'Erste Antwort', correct: false },
  ])

  const handleChangeAnswer = (modifiedAnswer, modifiedAnswerIndex) => {
    const newAnswerOptions = answerOptions
    answerOptions.map((answer, index) => {
      if (index === modifiedAnswerIndex) {
        newAnswerOptions[index] = modifiedAnswer
      }
      return answer
    })
    setAnswerOptions(newAnswerOptions)
  }

  return (
    <AddQuestionContainer>
      <NewQuestionContainer>
        <QuestionText placeholder="Insert your Question here...." />
        <NewAnswersContainer name="new-answer-container">
          {answerOptions.map((answer, index) => (
            <NewAnswerElement
              key={index}
              inCommingAnswer={answer}
              index={index}
              handleChangeAnswer={handleChangeAnswer}
              inCommingCorrect={answer.correct}
            />
          ))}
          <AddNewAnswerOption type="button">Add Answer</AddNewAnswerOption>
        </NewAnswersContainer>
      </NewQuestionContainer>
      <SaveQuestionButton>Save Question</SaveQuestionButton>
    </AddQuestionContainer>
  )
}

const NewQuestionContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: center;
`

const QuestionText = styled.textarea``

const NewAnswersContainer = styled.section``

const AddNewAnswerOption = styled.button``

const SaveQuestionButton = styled.button``

const AddQuestionContainer = styled.section``
