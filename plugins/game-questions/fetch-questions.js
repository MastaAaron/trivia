const axios = require(`axios`).default
const apiUrl = `https://opentdb.com/api.php?amount=50&difficulty=hard&type=boolean`


const exitBuild = () => {
  console.log(`There was a problem fetching game questions. See above for potential logs.`)
  console.log(`Cannot build site without game questions. Exiting...`)
  process.exit(1)
}


module.exports = async function fetchQuestions() {
  try {
    const response = await axios.get(apiUrl)
    const { response_code, results } = response?.data || {}

    if (!results?.length || response_code !== 0) {
      console.error(`Bad response_code or no questions returned from API.`)
      console.error(`Response body:`, response?.data)
      exitBuild()
    }

    return results
  }
  catch(error) {
    console.error(error.toJSON())
    exitBuild()
  }
}
