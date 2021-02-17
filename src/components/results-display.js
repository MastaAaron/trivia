import React from 'react'
import { Link } from 'gatsby'
import { decode as decodeEntities } from 'html-entities'


export default function ResultsDisplay(props) {
  const { questions, score } = props

  return (
    <>
      <h2>Score: {score} / 10</h2>
      {questions.map(q => (
        <p key={q.id}>
          {q.isCorrect ? `✓` : `✗`}&emsp;
          {decodeEntities(q.text)}
        </p>
      ))}
      <Link to="/">Play Again</Link>
    </>
  )
}
