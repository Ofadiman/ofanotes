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
      typography: {
        main: string
      }
    }
    spacing: (spacingValue: number) => string
    typography: {
      body: FlattenInterpolation<ThemeProps<DefaultTheme>>
      button: FlattenInterpolation<ThemeProps<DefaultTheme>>
      h1: FlattenInterpolation<ThemeProps<DefaultTheme>>
      h2: FlattenInterpolation<ThemeProps<DefaultTheme>>
      h3: FlattenInterpolation<ThemeProps<DefaultTheme>>
      h4: FlattenInterpolation<ThemeProps<DefaultTheme>>
      h5: FlattenInterpolation<ThemeProps<DefaultTheme>>
      h6: FlattenInterpolation<ThemeProps<DefaultTheme>>
      input: FlattenInterpolation<ThemeProps<DefaultTheme>>
      p: FlattenInterpolation<ThemeProps<DefaultTheme>>
    }
    zIndex: {}
  }
}
