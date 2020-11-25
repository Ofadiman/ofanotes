import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import { Footer } from '../components/Footer/Footer.component'
import { Header } from '../components/Header/Header.component'
import { StyledLayout, StyledLink, StyledMain } from './Layout.styles'

interface LayoutQueryResult {
  allMdx: {
    edges: {
      frontmatter: { createdAt: string }
      slug: string
    }[]
  }
}

export const Layout: FCC = ({ children }) => {
  const { pathname } = useLocation()
  const isOnNotePage = pathname.startsWith('/notes/')

  const queryResult: LayoutQueryResult = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        edges {
          node {
            frontmatter {
              createdAt
            }
            slug
          }
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Header />
      <StyledMain width={window.innerWidth}>
        {children}
        {isOnNotePage && (
          <StyledLink
            href={`https://github.com/Ofadiman/ofanotes/blob/main/src/pages${pathname.slice(0, -1)}.mdx`}
          >{`Edit on github`}</StyledLink>
        )}
      </StyledMain>
      <Footer />
    </StyledLayout>
  )
}
