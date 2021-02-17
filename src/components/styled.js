import styled from '@emotion/styled'


export const LandingPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1, a {
    margin-bottom: 1.5em;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
  }
`

export const Card = styled.article`
  height: 10rem;
  border-radius: 10px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  @media(max-width: 411px) {
    height: 50vh;
  }
`
