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
    }
  },
  spacing,
  typography: {
    body: css`
      color: hsl(0, 0%, 20%);
      font-size: 1.6rem;
      font-weight: normal;
    `,
    button: css`
      color: hsl(0, 0%, 20%);
      font-size: 1.8rem;
      font-weight: normal;
    `,
    h1: css`
      color: hsl(0, 0%, 20%);
      font-size: 3rem;
      font-weight: normal;
    `,
    h2: css`
      color: hsl(0, 0%, 20%);
      font-size: 2.8rem;
      font-weight: normal;
    `,
    h3: css`
      color: hsl(0, 0%, 20%);
      font-size: 2.6rem;
      font-weight: normal;
    `,
    h4: css`
      color: hsl(0, 0%, 20%);
      font-size: 2.4rem;
      font-weight: normal;
    `,
    h5: css`
      color: hsl(0, 0%, 20%);
      font-size: 2.2rem;
      font-weight: normal;
    `,
    h6: css`
      color: hsl(0, 0%, 20%);
      font-size: 2rem;
      font-weight: normal;
    `,
    input: css`
      color: hsl(0, 0%, 20%);
      font-size: 1.8rem;
      font-weight: normal;
    `
  },
  zIndex: {}
}
