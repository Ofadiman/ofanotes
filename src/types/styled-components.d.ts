import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    mediaQueries: {
      below: {
        desktop: string
        tablet: string
      }
      up: {
        desktop: string
        tablet: string
      }
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
      divider: {
        background: string
      }
      footer: {
        decoration: string
        iconCaption: string
        ripple: string
      }
      header: {
        backgroundDark: string
        backgroundLight: string
        shadow: string
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
      mdxHeading: {
        svg: string
        svgHover: string
      }
      mdxIntro: {
        link: string
      }
      menuItem: {
        highlight: string
      }
      typography: {
        anchorHover: string
        code: string
        codeBackground: string
        light: string
        main: string
      }
    }
    typography: {
      a: FlattenInterpolation<ThemeProps<DefaultTheme>>
      body: FlattenInterpolation<ThemeProps<DefaultTheme>>
      button: FlattenInterpolation<ThemeProps<DefaultTheme>>
      code: FlattenInterpolation<ThemeProps<DefaultTheme>>
      h1: FlattenInterpolation<ThemeProps<DefaultTheme>>
      h2: FlattenInterpolation<ThemeProps<DefaultTheme>>
      h3: FlattenInterpolation<ThemeProps<DefaultTheme>>
      h4: FlattenInterpolation<ThemeProps<DefaultTheme>>
      h5: FlattenInterpolation<ThemeProps<DefaultTheme>>
      h6: FlattenInterpolation<ThemeProps<DefaultTheme>>
      input: FlattenInterpolation<ThemeProps<DefaultTheme>>
      li: FlattenInterpolation<ThemeProps<DefaultTheme>>
      p: FlattenInterpolation<ThemeProps<DefaultTheme>>
    }
    zIndex: {
      header: number
    }
  }
}
