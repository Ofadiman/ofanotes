import { DefaultTheme } from 'styled-components'

import { bordering } from '../functions/bordering'
import { spacing } from '../functions/spacing'

export const defaultTheme: DefaultTheme = {
  bordering,
  mediaQueries: {},
  name: 'Default',
  palette: {
    primary: {
      dark: 'hsl(265, 100%, 50%)',
      hoverBackground: 'hsla(265, 100%, 90%, 10%)',
      hoverText: 'hsl(265, 100%, 90%)',
      light: 'hsl(265, 100%, 70%)',
      main: 'hsl(265, 100%, 60%)',
      ripple: 'hsl(265, 0%, 80%)',
      text: 'hsl(265, 100%, 100%)'
    }
  },
  spacing,
  typography: {},
  zIndex: {}
}
