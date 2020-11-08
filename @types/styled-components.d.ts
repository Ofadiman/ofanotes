import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bordering: (borderingValue: number) => string
    mediaQueries: {}
    name: string
    palette: {
      header: {
        backgroundDark: string
        backgroundLight: string
        iconHoverBackground: string
        ripple: string
        text: string
        textHover: string
      }

      input: {
        decorator: string
        decoratorActive: string
        decoratorHover: string
      }

      typography: {
        light: string
        main: string
      }
    }
    spacing: (spacingValue: number) => string
    typography: {}
    zIndex: {}
  }
}
