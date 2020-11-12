import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bordering: (borderingValue: number) => string
    mediaQueries: {
      desktop: string
      tablet: string
    }
    name: string
    palette: {
      codeHighlighter: {
        background: string
        languageBadge: string
        languageBadgeText: string
        lineDecorator: string
        lineHighlighted: string
      }
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
        icon: string
        label: string
      }
      menuItem: {
        highlight: string
      }
    }
    spacing: (spacingValue: number) => string
    typography: {
      body: FlattenSimpleInterpolation
      button: FlattenSimpleInterpolation
      h1: FlattenSimpleInterpolation
      h2: FlattenSimpleInterpolation
      h3: FlattenSimpleInterpolation
      h4: FlattenSimpleInterpolation
      h5: FlattenSimpleInterpolation
      h6: FlattenSimpleInterpolation
      input: FlattenSimpleInterpolation
    }
    zIndex: {}
  }
}
