import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { decode as decodeEntities } from 'html-entities'
import { LandingPageContent } from '../components/styled'


const ResultListContainer = styled.section`
  margin-bottom: 2rem;
`

const ResultRowContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;

  .icon {
    width: 4rem;
    font-size: 1.5rem;
    color: ${props => props.isCorrect ? `yellowgreen` : `tomato`};
  }

  .question-answer {
    flex: 1;
    display: flex;
    flex-direction: column;

    .correct-answer-display {
      font-size: 0.8rem;
    }

    *:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid slategray;
  }
`


const ResultRow = props => (
  <ResultRowContainer isCorrect={props.isCorrect}>
    <div className="icon">
      {props.isCorrect ? `✓` : `✗`}
    </div>
    <div className="question-answer">
      <span>{decodeEntities(props.text)}</span>
      <span className="correct-answer-display">
        correct answer:&nbsp;
        <strong>
          {props.answer === true ? `TRUE` : `FALSE`}
        </strong>
      </span>
    </div>
  </ResultRowContainer>
)


export default function ResultsDisplay(props) {
  const { questions, score } = props

  return (
    <LandingPageContent>
      <h1>Score: {score} / 10</h1>
      <ResultListContainer>
        {questions.map(question => (
          <ResultRow key={question.id} {...question} />
        ))}
      </ResultListContainer>
      <Link to="/">Play Again</Link>
    </LandingPageContent>
  )
}
