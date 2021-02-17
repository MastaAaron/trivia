import React from 'react'
import styled from '@emotion/styled'
import { decode as decodeEntities } from 'html-entities'
import { Card } from './styled'


const QuestionHeading = styled.section`
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 0.8rem;
  white-space: nowrap;

  h2 {
    font-weight: bold;
  }

  @media(max-width: 411px) {
    font-size: 3.5vw;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`

const ButtonRow = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  button {
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-size: 1.25em;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`

export default function QuestionDisplay(props) {
  const {
    category,
    text,
    currentIndex,
    onChooseAnswer: handleChoose
  } = props

  return (
    <>
      <QuestionHeading>
        <span>{currentIndex + 1} of 10</span>
        <h2>{category}</h2>
      </QuestionHeading>
      <Card>
        {decodeEntities(text)}
      </Card>
      <ButtonRow>
        <button onClick={() => handleChoose?.(true)}>
          TRUE
        </button>
        <button onClick={() => handleChoose?.(false)}>
          FALSE
        </button>
      </ButtonRow>
    </>
  )
}
