import { graphql, PageProps } from 'gatsby'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

import SearchSvg from '../assets/icons/search.inline.svg'
import { Input } from '../components/Input/Input.component'
import { MenuItem } from '../components/MenuItem/MenuItem.component'
import {
  StyledIndexPage,
  StyledMenuItemList,
  StyledPageTitle,
  StyledSectionTitle
} from '../utils/pages/index/index.styles'
import { HomePageQueryResult } from '../utils/pages/index/index.types'
import { filterMenuItems, howToMenuItemRegex, otherMenuItemRegex } from '../utils/pages/index/index.utils'

export default function Home({ data }: PageProps<HomePageQueryResult>): JSX.Element {
  const initialHowToMenuItemsRef = useRef(filterMenuItems(howToMenuItemRegex, data.allMdx.edges))
  const initialOtherMenuItemsRef = useRef(filterMenuItems(otherMenuItemRegex, data.allMdx.edges))
  const [filteredHowToMenuItems, setFilteredHowToMenuItems] = useState(initialHowToMenuItemsRef.current)
  const [filteredOtherMenuItems, setFilteredOtherMenuItems] = useState(initialOtherMenuItemsRef.current)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (searchValue.trim() === '') {
      setFilteredHowToMenuItems(initialHowToMenuItemsRef.current)
      setFilteredOtherMenuItems(initialOtherMenuItemsRef.current)
    } else {
      const currentSearchRegex = new RegExp(searchValue.trim(), 'i')

      setFilteredHowToMenuItems(filterMenuItems(currentSearchRegex, initialHowToMenuItemsRef.current))
      setFilteredOtherMenuItems(filterMenuItems(currentSearchRegex, initialOtherMenuItemsRef.current))
    }
  }, [searchValue])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value)
  }

  return (
    <StyledIndexPage>
      <StyledPageTitle>{'Welcome to Ofanotes!'}</StyledPageTitle>
      <Input Icon={SearchSvg} label={'Search...'} onChange={handleInputChange} type={'text'} value={searchValue} />
      <StyledSectionTitle>{'How to'}</StyledSectionTitle>
      <StyledMenuItemList>
        {filteredHowToMenuItems.length === 0 ? (
          <h6>{'There are not matches for your query'}</h6>
        ) : (
          filteredHowToMenuItems.map(({ node }) => (
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
      <StyledSectionTitle>{'Others'}</StyledSectionTitle>
      <StyledMenuItemList>
        {filteredOtherMenuItems.length === 0 ? (
          <h6>{'There are not matches for your query'}</h6>
        ) : (
          filteredOtherMenuItems.map(({ node }) => (
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
    allMdx(sort: { order: DESC, fields: frontmatter___createdAt }) {
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
