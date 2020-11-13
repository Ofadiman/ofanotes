import React from 'react'

import { Link } from '../Link/Link.component'
import { footerConst } from './Footer.const'
import { StyledFooter, StyledIconCaption, StyledIconContainer } from './Footer.styles'
import { FooterProps } from './Footer.types'

export const Footer: FC<FooterProps> = ({ className }) => (
  <StyledFooter className={className}>
    {footerConst.map(({ caption, Icon, to }) => (
      <Link key={to} to={to}>
        <StyledIconContainer>
          <Icon />
          <StyledIconCaption>{caption}</StyledIconCaption>
        </StyledIconContainer>
      </Link>
    ))}
  </StyledFooter>
)
