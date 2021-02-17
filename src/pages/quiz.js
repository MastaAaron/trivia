import React from 'react'
import { Link } from 'gatsby'
import { decode as decodeEntities } from 'html-entities'
import Layout from '../components/layout'
import useQuizState from '../quiz-state'


const QuizResults = ({ questions }) => {
  const isCorrect = question => question.answer === question.chosenAnswer
  const score = questions.filter(isCorrect).length

  return (
    <Layout>
      <h2>Score: {score} / 10</h2>
      {questions.map(q => (
        <p key={q.id}>
          {isCorrect(q) ? `CORRECT` : `INCORRECT`}:&nbsp;
          {decodeEntities(q.text)}
        </p>
      ))}
      <Link to="/">Play Again</Link>
    </Layout>
  )
}


export default function QuizPage() {
  const [quizState, answerQuestion] = useQuizState()

  const { currentIndex, questions } = quizState
  const currentQuestion = questions[currentIndex]

  if (!currentQuestion) return <QuizResults questions={questions} />

  return (
    <Layout>
      <h2>{currentQuestion.category}</h2>
      <p>
        {decodeEntities(currentQuestion.text)}
      </p>
      <button onClick={() => answerQuestion(true)}>
        True
      </button>
      <button onClick={() => answerQuestion(false)}>
        False
      </button>
    </Layout>
  )
}
