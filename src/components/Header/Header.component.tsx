import React from 'react'
import { useTheme } from 'styled-components'

import { IconButton } from '../IconButton/IconButton.component'
import { Link } from '../Link/Link.component'
import { StyledGithubIcon, StyledHeader, StyledHeaderTitle } from './Header.styles'
import { HeaderProps } from './Header.types'

export const Header: FC<HeaderProps> = ({ className, title }) => {
  const theme = useTheme()

  return (
    <StyledHeader className={className}>
      <Link to={'/'}>
        <StyledHeaderTitle>{title}</StyledHeaderTitle>
      </Link>
      <Link to={'https://github.com/Ofadiman'}>
        <IconButton
          iconColor={theme.palette.header.text}
          iconHoverBackgroundColor={theme.palette.header.iconHoverBackground}
          rippleColor={theme.palette.header.ripple}
        >
          <StyledGithubIcon />
        </IconButton>
      </Link>
    </StyledHeader>
  )
}
