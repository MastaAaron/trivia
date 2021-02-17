import React from 'react'
import Layout from '../components/layout'
import QuestionDisplay from '../components/question-display'
import ResultsDisplay from '../components/results-display'
import useQuizState from '../quiz-state'


export default function QuizPage() {
  const [quizState, answerQuestion] = useQuizState()

  const { currentIndex, questions } = quizState
  const currentQuestion = questions[currentIndex]

  let pageContent = <ResultsDisplay {...quizState} />

  if (currentQuestion) pageContent = (
    <QuestionDisplay
      {...currentQuestion}
      currentIndex={currentIndex}
      onChooseAnswer={answerQuestion}
    />
  )

  return (
    <Layout>
      {pageContent}
    </Layout>
  )
}
