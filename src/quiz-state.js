import { useMemo, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import _shuffle from 'lodash/shuffle'
import produce from 'immer'


const query = graphql`
  query QuizQuestionsQuery {
    allTriviaQuestion {
      nodes {
        id
        category
        text
        answer
      }
    }
  }
`


const isCorrect = question => question.answer === question.chosenAnswer


export default function useQuizState() {
  const queryData = useStaticQuery(query)
  const questionPool = queryData?.allTriviaQuestion?.nodes || []

  const drawnQuestions = useMemo(
    () => _shuffle(questionPool).slice(0, 10),
    [questionPool]
  )

  const initialQuestions = useMemo(() => {
    return drawnQuestions.map(q => ({ ...q, chosenAnswer: null }))
  }, [drawnQuestions])

  const [questions, setQuestions] = useState(initialQuestions)
  const [currentIndex, setCurrentIndex] = useState(0)

  const answerQuestion = (chosenAnswer) => {
    setQuestions(produce(draft => {
      const activeQuestion = draft[currentIndex]
      if (activeQuestion) {
        activeQuestion.chosenAnswer = chosenAnswer
        activeQuestion.isCorrect = isCorrect(activeQuestion)
      }
    }))
    setCurrentIndex(currentIndex + 1)
  }

  const score = questions.filter(isCorrect).length
  const quizState = { questions, currentIndex, score }

  return [quizState, answerQuestion]
}
