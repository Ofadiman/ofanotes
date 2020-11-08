import React from 'react'

import { StyledGatsbyLink, StyledLink } from './Link.styles'
import { LinkProps } from './Link.types'

export const Link: FCC<LinkProps> = ({ children, to, className }) => {
  const isInternalLink = to.startsWith('/')
  const isOnPageLink = to.startsWith('#')

  if (isInternalLink) {
    return <StyledGatsbyLink to={to}>{children}</StyledGatsbyLink>
  }

  if (isOnPageLink) {
    return (
      <StyledLink className={className} href={to}>
        {children}
      </StyledLink>
    )
  }

  return (
    <StyledLink className={className} href={to} rel={'noopener noreferrer'} target={'_blank'}>
      {children}
    </StyledLink>
  )
}
