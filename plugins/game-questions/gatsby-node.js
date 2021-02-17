const fetchQuestions = require(`./fetch-questions`)


exports.sourceNodes = async (helpers) => {
  const { actions, createNodeId, createContentDigest } = helpers
  const { createNode } = actions

  console.log(`Fetching game questions from API...`)
  const questions = await fetchQuestions()
  console.log(`${questions.length} question(s) fetched.`)

  questions.forEach((question, i) => {
    const formattedQuestion = {
      category: question.category,
      text: question.question,
      answer: question.correct_answer === `True`
    }

    const node = {
      id: createNodeId(`trivia-question-${i}`),
      ...formattedQuestion,
      internal: {
        type: `TriviaQuestion`,
        contentDigest: createContentDigest(formattedQuestion)
      }
    }

    createNode(node)
  })
}


exports.createSchemaCustomization = async ({ actions }) => {
	const { createTypes } = actions

	createTypes(`
    type TriviaQuestion implements Node @infer {
      id: String
      category: String
      text: String
      answer: Boolean
    }
  `)
}
