import React from 'react'
import { Helmet } from 'react-helmet'
import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'


const globalStyles = css`
  ${emotionReset}
  font-family: Courier, Courier New, monospace;
`


export default function Layout(props) {
  return (
    <>
      <Helmet>
        <Global title="MastaAaron's Trivia" styles={globalStyles} />
      </Helmet>
      <main>
        {props.children}
      </main>
    </>
  )
}
