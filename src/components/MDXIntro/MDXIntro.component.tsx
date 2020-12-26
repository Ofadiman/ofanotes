import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import ReactMarkdown from 'react-markdown'

import { Divider } from '../Divider/Divider.component'
import { SEO } from '../SEO/SEO.component'
import { StyledDate, StyledLink } from './MDXIntro.styles'
import { MDXIntroQueryResult, MDXIntroQueryResultEdge } from './MDXIntro.types'

export const MDXIntro: FCC = ({ children }) => {
  const { pathname } = useLocation()
  const queryResult: MDXIntroQueryResult = useStaticQuery(graphql`
    query MDXIntroQuery {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              createdAt(formatString: "YYYY-MM-DD")
            }
            slug
            tableOfContents
          }
        }
      }
    }
  `)

  const currentPageData = queryResult.allMdx.edges.find(({ node }) =>
    pathname.includes(node.slug)
  ) as MDXIntroQueryResultEdge

  return (
    <>
      <SEO title={currentPageData.node.frontmatter.title} />
      <h1>
        {currentPageData.node.frontmatter.title}
        <StyledDate>{`Created at ${currentPageData.node.frontmatter.createdAt}`}</StyledDate>
      </h1>
      <ReactMarkdown>{children as string}</ReactMarkdown>
      <h2>{'Table of contents'}</h2>
      <ul>
        {currentPageData.node.tableOfContents.items.map(({ title, url }) => (
          <li key={url}>
            <StyledLink href={`${pathname}${url}`}>{title}</StyledLink>
          </li>
        ))}
      </ul>
      <Divider />
    </>
  )
}
