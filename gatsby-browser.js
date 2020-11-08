import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import { Layout } from './src/layout/Layout'
import { GlobalStyle } from './src/styles/GlobalStyle'

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
    <GlobalStyle />
    <ThemeProvider theme={{}}>
      <MDXProvider components={{}}>
        <Layout>{element}</Layout>
      </MDXProvider>
    </ThemeProvider>
  </>
)
