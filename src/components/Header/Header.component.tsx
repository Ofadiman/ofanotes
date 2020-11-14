import React from 'react'

import { Link } from '../Link/Link.component'
import { StyledHeader, StyledHeaderTitle } from './Header.styles'
import { HeaderProps } from './Header.types'

export const Header: FC<HeaderProps> = ({ className, title }) => (
  <StyledHeader className={className}>
    <Link href={'/'}>
      <StyledHeaderTitle>{title}</StyledHeaderTitle>
    </Link>
  </StyledHeader>
)
