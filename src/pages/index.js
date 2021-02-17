import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


export default function HomePage() {
  return (
    <Layout>
      <h1>Welcome to the only trivia game you'll ever need!</h1>
      <Link to="/quiz">Start Quiz</Link>
    </Layout>
  )
}
