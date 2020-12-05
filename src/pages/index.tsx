import { graphql, PageProps } from 'gatsby'
import React, { ChangeEvent, useEffect, useState } from 'react'

import SearchSvg from '../assets/icons/search.inline.svg'
import { Input } from '../components/Input/Input.component'
import { MenuItem } from '../components/MenuItem/MenuItem.component'
import { StyledIndexPage, StyledMenuItemList } from '../utils/pages/index/index.styles'
import { HomePageQueryResult } from '../utils/pages/index/index.types'
import { filterMenuItems } from '../utils/pages/index/index.utils'

export default function Home({ data }: PageProps<HomePageQueryResult>): JSX.Element {
  const [filteredMenuItems, setFilteredMenuItems] = useState(data.allMdx.edges)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (searchValue.trim() === '') {
      setFilteredMenuItems(data.allMdx.edges)
    } else {
      const currentSearchRegex = new RegExp(searchValue.trim(), 'i')

      setFilteredMenuItems(filterMenuItems(currentSearchRegex, data.allMdx.edges))
    }
  }, [data.allMdx.edges, searchValue])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value)
  }

  return (
    <StyledIndexPage>
      <h1>{`Quote of the day feature here.`}</h1>
      <Input
        Icon={SearchSvg}
        label={`I'm looking for...`}
        onChange={handleInputChange}
        type={'text'}
        value={searchValue}
      />
      <StyledMenuItemList>
        {filteredMenuItems.length === 0 ? (
          <h6>
            {'Unfortunately, nothing covers '}
            <code>{searchValue}</code>
            {' yet.'}
          </h6>
        ) : (
          filteredMenuItems.map(({ node }) => (
            <MenuItem
              highlight={searchValue}
              key={node.slug}
              tags={node.frontmatter.tags}
              text={node.frontmatter.title}
              to={`/notes/${node.slug}/`}
            />
          ))
        )}
      </StyledMenuItemList>
    </StyledIndexPage>
  )
}

export const query = graphql`
  query HomeQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___createdAt] }) {
      edges {
        node {
          frontmatter {
            title
            createdAt
            tags
          }
          slug
        }
      }
    }
  }
`
