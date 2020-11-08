import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bordering: (borderingValue: number) => string
    mediaQueries: {}
    name: string
    palette: {
      primary: {
        dark: string
        hoverBackground: string
        hoverText: string
        light: string
        main: string
        ripple: string
        text: string
      }
    }
    spacing: (spacingValue: number) => string
    typography: {}
    zIndex: {}
  }
}
