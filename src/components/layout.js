import React from 'react'
import { Helmet } from 'react-helmet'
import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'


const globalStyles = css`
  ${emotionReset}
  * {
    font-family: Courier, Courier New, monospace;
  }
`


export default function Layout(props) {
  return (
    <>
      <Helmet title="MastaAaron's Trivia" />
      <Global styles={globalStyles} />
      <main>
        {props.children}
      </main>
    </>
  )
}
