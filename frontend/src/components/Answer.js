import * as React from 'react'
import styled from 'styled-components/macro'
export default function Answer({ answer }) {
  return (
    <AnswerContainer>
      <ChooseAnswerButton type="radio" />
      <AnswerText>{answer.answerText}</AnswerText>
    </AnswerContainer>
  )
}
const AnswerContainer = styled.section``
const AnswerText = styled.p``
const ChooseAnswerButton = styled.input``
