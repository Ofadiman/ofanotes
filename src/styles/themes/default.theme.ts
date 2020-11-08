import { DefaultTheme } from 'styled-components'

import { bordering } from '../functions/bordering'
import { spacing } from '../functions/spacing'

export const defaultTheme: DefaultTheme = {
  bordering,
  mediaQueries: {},
  name: 'Default',
  palette: {
    header: {
      backgroundDark: 'hsl(265, 100%, 55%)',
      backgroundLight: 'hsl(265, 100%, 65%)',
      iconHoverBackground: 'hsla(265, 100%, 90%, 10%)',
      ripple: 'hsl(265, 0%, 80%)',
      text: 'hsl(265, 100%, 95%)',
      textHover: 'hsla(265, 100%, 100%)'
    },
    input: {
      decorator: 'hsla(265, 100%, 90%)',
      decoratorActive: 'hsl(265, 100%, 60%)',
      decoratorHover: 'hsl(265, 100%, 75%)'
    },
    typography: {
      light: 'hsl(0, 0%, 50%)',
      main: 'hsl(0, 0%, 20%)'
    }
  },
  spacing,
  typography: {},
  zIndex: {}
}
