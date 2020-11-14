import React from 'react'

import { StyledGatsbyLink, StyledLink } from './Link.styles'
import { LinkProps } from './Link.types'

export const Link: FCC<LinkProps> = ({ children, href, className }) => {
  const isInternalLink = href.startsWith('/')
  const isOnPageLink = href.startsWith('#')
  const isOnResourcePage = window.location.pathname === '/notes/programming-resources/'

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
      isOnResourcePage={isOnResourcePage}
      rel={'noopener noreferrer'}
      target={'_blank'}
    >
      {children}
    </StyledLink>
  )
}
