import { graphql, useStaticQuery } from 'gatsby'
import React, { useLayoutEffect, useState } from 'react'

import { Footer } from '../components/Footer/Footer.component'
import { Header } from '../components/Header/Header.component'
import { StyledLayout, StyledMain } from './Layout.styles'
import { LayoutQueryResult } from './Layout.types'

export const Layout: FCC = ({ children }) => {
  const [width, setWidth] = useState<number | null>(null)
  const queryResult: LayoutQueryResult = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useLayoutEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <StyledLayout>
      <Header title={queryResult.site.siteMetadata.title} />
      <StyledMain width={width}>{children}</StyledMain>
      <Footer />
    </StyledLayout>
  )
}
