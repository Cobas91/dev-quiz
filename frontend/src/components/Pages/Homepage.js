import * as React from 'react'
import styled from 'styled-components/macro'
import Question from '../Question'

export default function Homepage({ questions }) {
  return (
    <HomePageContainer>
      {questions.map(question => (
        <Question question={question} key={question.questionID} />
      ))}
    </HomePageContainer>
  )
}

const HomePageContainer = styled.div``
