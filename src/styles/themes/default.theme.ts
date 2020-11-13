import { css, DefaultTheme } from 'styled-components'

import { bordering } from '../functions/bordering'
import { spacing } from '../functions/spacing'

export const defaultTheme: DefaultTheme = {
  bordering,
  mediaQueries: {
    desktop: '@media(min-width: 1200px)',
    tablet: '@media(min-width: 768px)'
  },
  name: 'Default',
  palette: {
    codeHighlighter: {
      background: 'hsl(0, 0%, 13%)',
      languageBadge: 'hsl(265, 100%, 70%)',
      languageBadgeText: 'hsl(265, 100%, 100%)',
      lineDecorator: 'hsl(265, 100%, 70%)',
      lineHighlighted: 'hsl(0, 0%, 18%)'
    },
    footer: {
      decoration: 'hsl(0, 0%, 80%)',
      iconCaption: 'hsl(0, 0%, 30%)'
    },
    header: {
      backgroundDark: 'hsl(265, 100%, 55%)',
      backgroundLight: 'hsl(265, 100%, 65%)',
      iconHoverBackground: 'hsla(265, 100%, 90%, 10%)',
      ripple: 'hsl(265, 0%, 80%)',
      text: 'hsl(265, 100%, 100%)',
      textHover: 'hsla(265, 100%, 90%)'
    },
    input: {
      decorator: 'hsla(265, 0%, 90%)',
      decoratorActive: 'hsl(265, 100%, 60%)',
      decoratorHover: 'hsl(265, 100%, 75%)',
      icon: 'hsl(0, 0%, 50%)',
      label: 'hsl(0, 0%, 50%)'
    },
    menuItem: {
      highlight: 'hsl(265, 100%, 60%)'
    },
    typography: {
      main: 'hsl(0, 0%, 20%)'
    }
  },
  spacing,
  typography: {
    body: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 1.6rem;
        font-weight: normal;
      `}
    `,
    button: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 1.8rem;
        font-weight: normal;
      `}
    `,
    h1: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 4rem;
        font-weight: normal;
        letter-spacing: 1px;
        margin: ${theme.spacing(8)} 0;
      `}
    `,
    h2: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 2.8rem;
        font-weight: normal;
        margin: ${theme.spacing(7)} 0;
      `}
    `,
    h3: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 2.6rem;
        font-weight: normal;
        letter-spacing: 1px;
        margin: ${theme.spacing(6)} 0;
      `}
    `,
    h4: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 2.4rem;
        font-weight: normal;
        margin: ${theme.spacing(5)} 0;
      `}
    `,
    h5: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 2.2rem;
        font-weight: normal;
        margin: ${theme.spacing(4)} 0;
      `}
    `,
    h6: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 2rem;
        font-weight: normal;
        margin: ${theme.spacing(3)} 0;
      `}
    `,
    input: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 1.8rem;
        font-weight: normal;
      `}
    `,
    p: css`
      ${({ theme }) => css`
        margin: ${theme.spacing(2)} 0;
      `}
    `
  },
  zIndex: {}
}
