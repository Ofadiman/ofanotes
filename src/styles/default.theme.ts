import { css, DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
  mediaQueries: {
    below: {
      desktop: '@media(max-width: 1200px)',
      tablet: '@media(max-width: 768px)'
    },
    up: {
      desktop: '@media(min-width: 1200px)',
      tablet: '@media(min-width: 768px)'
    }
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
      a: 'hsl(265, 100%, 40%)',
      code: 'hsl(265, 50%, 20%)',
      codeBackground: 'hsl(30, 70%, 95%)',
      main: 'hsl(0, 0%, 20%)'
    }
  },
  typography: {
    a: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.a};
      `}
    `,
    body: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 1.8rem;
        font-weight: normal;
      `}
    `,
    button: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 2rem;
        font-weight: normal;
      `}
    `,
    code: css`
      ${({ theme }) => css`
        background-color: ${theme.palette.typography.codeBackground};
        border-radius: 4px;
        color: ${theme.palette.typography.code};
        padding: 0 4px;
      `}
    `,
    h1: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 4rem;
        font-weight: normal;
        letter-spacing: 1px;
        padding: 3.2rem 0;
      `}
    `,
    h2: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 2.8rem;
        font-weight: normal;
        padding: 2.8rem 0;
      `}
    `,
    h3: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 2.6rem;
        font-weight: normal;
        letter-spacing: 1px;
        padding: 2.4rem 0;
      `}
    `,
    h4: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 2.4rem;
        font-weight: normal;
        padding: 2rem 0;
      `}
    `,
    h5: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 2.2rem;
        font-weight: normal;
        padding: 1.6rem 0;
      `}
    `,
    h6: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 2rem;
        font-weight: normal;
        padding: 1.2rem 0;
      `}
    `,
    input: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        font-size: 1.8rem;
        font-weight: normal;
      `}
    `,
    li: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        padding: 4px 0;
      `}
    `,
    p: css`
      ${({ theme }) => css`
        color: ${theme.palette.typography.main};
        padding: 8px 0;
      `}
    `
  },
  zIndex: {}
}
