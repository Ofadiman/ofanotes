import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bordering: (value: number) => string
    mediaQueries: {}
    name: string
    palette: {}
    shadowing: (value: number) => string
    spacing: (value: number) => string
    typography: {}
    zIndex: {}
  }
}
