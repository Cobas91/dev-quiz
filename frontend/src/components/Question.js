import styled from 'styled-components/macro'
import Answer from './Answer'

export default function Question({ question }) {
  return (
    <QuestionContainer>
      <QuestionText>{question.questionText}</QuestionText>
      <AnswerContainer>
        {question.answers.map(answer => (
          <Answer answer={answer} key={answer.answerID} />
        ))}
      </AnswerContainer>
    </QuestionContainer>
  )
}
const QuestionContainer = styled.section``
const QuestionText = styled.p``
const AnswerContainer = styled.section`
  display: flex;
`
