import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import { Layout } from './src/layout/Layout.component'
import { GlobalStyle } from './src/styles/GlobalStyle'
import { defaultTheme } from './src/styles/themes/default.theme'

export const wrapRootElement = ({ element }) => (
  <>
    <Helmet>
      <link
        href={
          'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
        }
        rel={'stylesheet'}
      />
    </Helmet>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <MDXProvider components={{}}>
        <Layout>{element}</Layout>
      </MDXProvider>
    </ThemeProvider>
  </>
)
