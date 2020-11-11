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
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (inputValue === '') {
      setFilteredHowToMenuItems(initialHowToMenuItemsRef.current)
      setFilteredOtherMenuItems(initialOtherMenuItemsRef.current)
    } else {
      const currentSearchRegex = new RegExp(inputValue, 'i')

      setFilteredHowToMenuItems(filterMenuItems(currentSearchRegex, initialHowToMenuItemsRef.current))
      setFilteredOtherMenuItems(filterMenuItems(currentSearchRegex, initialOtherMenuItemsRef.current))
    }
  }, [inputValue])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  return (
    <StyledIndexPage>
      <StyledPageTitle>{'Welcome to Ofanotes!'}</StyledPageTitle>
      <Input Icon={SearchSvg} label={'Search...'} onChange={handleInputChange} type={'text'} value={inputValue} />
      <StyledSectionTitle>{'How to'}</StyledSectionTitle>
      <StyledMenuItemList>
        {filteredHowToMenuItems.map(({ node }) => (
          <MenuItem key={node.slug} tags={node.frontmatter.tags} to={`/notes/${node.slug}/`}>
            {node.frontmatter.title}
          </MenuItem>
        ))}
      </StyledMenuItemList>
      <StyledSectionTitle>{'Others'}</StyledSectionTitle>
      <StyledMenuItemList>
        {filteredOtherMenuItems.map(({ node }) => (
          <MenuItem key={node.slug} tags={node.frontmatter.tags} to={`/notes/${node.slug}/`}>
            {node.frontmatter.title}
          </MenuItem>
        ))}
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
