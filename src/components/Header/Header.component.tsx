import React from 'react'

import { IconButton } from '../IconButton/IconButton.component'
import { Link } from '../Link/Link.component'
import { StyledGithubIcon, StyledHeader, StyledHeaderTitle } from './Header.styles'
import { HeaderProps } from './Header.types'

export const Header: FC<HeaderProps> = ({ className, title }) => (
  <StyledHeader className={className}>
    <Link to={'/'}>
      <StyledHeaderTitle>{title}</StyledHeaderTitle>
    </Link>
    <Link to={'https://github.com/Ofadiman'}>
      <IconButton>
        <StyledGithubIcon />
      </IconButton>
    </Link>
  </StyledHeader>
)
