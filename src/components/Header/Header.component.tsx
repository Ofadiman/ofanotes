import React from 'react'

import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { Link } from '../Link/Link.component'
import { StyledHeader, StyledHeaderTitle } from './Header.styles'
import { HeaderProps } from './Header.types'

export const Header: FC<HeaderProps> = ({ className }) => {
  const siteMetadata = useSiteMetadata()

  return (
    <StyledHeader className={className}>
      <Link href={'/'}>
        <StyledHeaderTitle>{siteMetadata.title}</StyledHeaderTitle>
      </Link>
    </StyledHeader>
  )
}
