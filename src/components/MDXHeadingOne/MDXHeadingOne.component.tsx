import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import { SEO } from '../SEO/SEO.component'
import { StyledDate } from './MDXHeadingOne.styles'
import { MDXHeadingOneProps, MDXHeadingOneQueryResult } from './MDXHeadingOne.types'

export const MDXHeadingOne: FC<MDXHeadingOneProps> = ({ className }) => {
  const { pathname } = useLocation()
  const queryResult: MDXHeadingOneQueryResult = useStaticQuery(graphql`
    query MDXHeadingOneQueryResult {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              createdAt(formatString: "YYYY-MM-DD")
            }
            slug
          }
        }
      }
    }
  `)

  const currentPageData = queryResult.allMdx.edges.find(({ node }) => pathname.includes(node.slug))
  if (currentPageData === undefined) {
    throw new Error('"currentPageData" is undefined!')
  }

  return (
    <>
      <SEO title={currentPageData.node.frontmatter.title} />
      <h1 className={className}>
        {currentPageData.node.frontmatter.title}
        <StyledDate>{`Created at ${currentPageData.node.frontmatter.createdAt}`}</StyledDate>
      </h1>
    </>
  )
}
