import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import { Header } from '../components/Header/Header.component'
import { StyledLayout, StyledMain } from './Layout.styles'
import { LayoutQueryResult } from './Layout.types'

export const Layout: FCC = ({ children }) => {
  const queryResult: LayoutQueryResult = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Header title={queryResult.site.siteMetadata.title} />
      <StyledMain>{children}</StyledMain>
      <footer>{'footer'}</footer>
    </StyledLayout>
  )
}
