import { globalHistory } from '@reach/router'
import React from 'react'

import { StyledGatsbyLink, StyledLink } from './Link.styles'
import { LinkProps } from './Link.types'

export const Link: FCC<LinkProps> = ({ children, href, className }) => {
  const isInternalLink = href.startsWith('/')
  const isOnPageLink = href.startsWith('#')

  if (isInternalLink) {
    return (
      <StyledGatsbyLink className={className} to={href}>
        {children}
      </StyledGatsbyLink>
    )
  }

  if (isOnPageLink) {
    return (
      <StyledLink className={className} href={href}>
        {children}
      </StyledLink>
    )
  }

  return (
    <StyledLink
      className={className}
      href={href}
      isOnResourcePage={globalHistory.location.pathname === '/notes/programming-resources/'}
      rel={'noopener noreferrer'}
      target={'_blank'}
    >
      {children}
    </StyledLink>
  )
}
