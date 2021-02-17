import React from 'react'
import { Helmet } from 'react-helmet'
import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'


const globalStyles = css`
  ${emotionReset}

  *, *::after, *::before {
    font-family: Courier, Courier New, monospace;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  body, html {
    font-size: 18px;
    background: whitesmoke;
  }

  strong {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    &:link, &:active, &:visited {
      color: steelblue;
    }
  }

  main {
    width: 100%;
    max-width: 1200px;
    padding: 4rem 2rem;
    margin: 0 auto;
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
