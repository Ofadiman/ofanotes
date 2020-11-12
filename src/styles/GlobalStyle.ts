import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 62.5%;
      font-family: Roboto, sans-serif;
      line-height: 1.2;
    }

    body {
      ${theme.typography.body};
    }

    h1 {
      ${theme.typography.h1};
    }

    h2 {
      ${theme.typography.h2};
    }

    h3 {
      ${theme.typography.h3};
    }

    h4 {
      ${theme.typography.h4};
    }

    h5 {
      ${theme.typography.h5};
    }

    h6 {
      ${theme.typography.h6};
    }

    p {
      ${theme.typography.p}
    }

    button {
      ${theme.typography.button}
    }

    input {
      ${theme.typography.input}
    }
  `}
`
