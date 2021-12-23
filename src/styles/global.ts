import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root {
    --background: #170808;
    --white: #FFFFFC;
    --pink: #CF8BA9;
    --red: #942020;

    --container: 100rem;

    --small: 2rem;
    --medium: 3rem;
    --large: 5rem;
    --huge: 7rem;

    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html {
    font-size: 62.5%
  }

  html, body, #__next {
    height: 100%;
    background: var(--background);
    color:  var(--white);
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  p {
    font-size: 1.1rem;
  }
`
