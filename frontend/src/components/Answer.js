import * as React from 'react'
import styled from 'styled-components/macro'
export default function Answer({ answer, questionID }) {
  return (
    <AnswerContainer>
      <ChooseAnswerButton type="radio" name={`answerGroup-${questionID}`} />
      <AnswerText>{answer.answerText}</AnswerText>
    </AnswerContainer>
  )
}
const AnswerContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50ch;
`
const AnswerText = styled.p``
const ChooseAnswerButton = styled.input``
