import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import { Divider } from '../Divider/Divider.component'
import { Link } from '../Link/Link.component'
import { TableOfContentsProps, TableOfContentsQueryResult } from './TableOfContents.types'

export const TableOfContents: FC<TableOfContentsProps> = ({ className }) => {
  const { pathname } = useLocation()
  const queryResult: TableOfContentsQueryResult = useStaticQuery(graphql`
    query TableOfContentsQuery {
      allMdx {
        edges {
          node {
            tableOfContents
            slug
          }
        }
      }
    }
  `)

  const currentPageDate = queryResult.allMdx.edges.find(({ node }) => pathname.includes(node.slug))

  if (!currentPageDate) {
    throw new Error('"currentPageDate" is undefined!')
  }

  return (
    <>
      <h2>{'Table of contents'}</h2>
      <ul className={className}>
        {currentPageDate.node.tableOfContents.items[0].items.map(({ title, url }) => (
          <li key={url}>
            <Link href={`${pathname}${url}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Divider />
    </>
  )
}
