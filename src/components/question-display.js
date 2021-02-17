import React from 'react'
import { decode as decodeEntities } from 'html-entities'


export default function QuestionDisplay(props) {
  const {
    category,
    text,
    currentIndex,
    onChooseAnswer: handleChoose
  } = props

  return (
    <article>
      <h2>{category}</h2>
      <span>
        {decodeEntities(text)}
      </span>
      <section className="buttons">
        <button onClick={() => handleChoose?.(true)}>
          True
        </button>
        <button onClick={() => handleChoose?.(false)}>
          False
        </button>
      </section>
      <span>{currentIndex + 1} of 10</span>
    </article>
  )
}
