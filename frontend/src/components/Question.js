import styled from 'styled-components/macro'
import Answer from './Answer'

export default function Question({ question }) {
  return (
    <QuestionContainer>
      <hr />
      <QuestionText>{question.questionText}</QuestionText>
      <AnswerContainer>
        {question.answers.map(answer => (
          <Answer
            answer={answer}
            questionID={question.questionID}
            key={answer.answerID}
          />
        ))}
      </AnswerContainer>
      <CheckButton>Check Answer</CheckButton>
      <hr />
    </QuestionContainer>
  )
}
const QuestionContainer = styled.section``
const QuestionText = styled.p``
const AnswerContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`
const CheckButton = styled.button`
  border-radius: 5px;
`
