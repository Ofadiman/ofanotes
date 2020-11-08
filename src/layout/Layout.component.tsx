import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import { Header } from '../components/Header/Header.component'
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
    <div>
      <Header title={queryResult.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>{'footer'}</footer>
    </div>
  )
}
