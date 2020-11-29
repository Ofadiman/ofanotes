import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import { CodeHighlighter } from '../components/CodeHighlighter/CodeHighlighter.component'
import { Divider } from '../components/Divider/Divider.component'
import { ExamplesTitle } from '../components/ExamplesTitle/ExamplesTitle.component'
import { Link } from '../components/Link/Link.component'
import { createMDXHeading } from '../components/MDXHeading/MDXHeading.component'
import { MDXHeadingOne } from '../components/MDXHeadingOne/MDXHeadingOne.component'
import { TableOfContents } from '../components/TableOfContents/TableOfContents.component'
import { Layout } from '../layout/Layout.component'
import { defaultTheme } from '../styles/default.theme'
import { GlobalStyle } from '../styles/GlobalStyle'

export const RootProvider: FCC = ({ children }) => (
  <>
    <Helmet>
      <link
        href={
          'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
        }
        rel={'stylesheet'}
      />
      <title>{'Ofanotes'}</title>
    </Helmet>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <MDXProvider
        components={{
          ExamplesTitle,
          MDXHeadingOne,
          TableOfContents,
          a: Link,
          h1: createMDXHeading('h1'),
          h2: createMDXHeading('h2'),
          h3: createMDXHeading('h3'),
          h4: createMDXHeading('h4'),
          h5: createMDXHeading('h5'),
          h6: createMDXHeading('h6'),
          hr: Divider,
          // eslint-disable-next-line react/display-name
          pre: (preProps) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
            const props = preToCodeBlock(preProps)
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (props) {
              return <CodeHighlighter {...props} />
            }

            return <pre {...preProps} />
          }
        }}
      >
        <Layout>{children}</Layout>
      </MDXProvider>
    </ThemeProvider>
  </>
)
