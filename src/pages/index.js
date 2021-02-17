import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { LandingPageContent } from '../components/styled'


export default function HomePage() {
  return (
    <Layout>
      <LandingPageContent>
        <h1>Welcome...to the only trivia game you'll ever need!</h1>
        <Link to="/quiz">Start Quiz</Link>
      </LandingPageContent>
    </Layout>
  )
}
