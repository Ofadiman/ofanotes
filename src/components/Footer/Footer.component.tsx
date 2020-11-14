import React from 'react'
import { useTheme } from 'styled-components'

import { IconButton } from '../IconButton/IconButton.component'
import { footerConst } from './Footer.const'
import { StyledFooter, StyledFooterLink, StyledIconCaption, StyledIconContainer } from './Footer.styles'
import { FooterProps } from './Footer.types'

export const Footer: FC<FooterProps> = ({ className }) => {
  const theme = useTheme()

  return (
    <StyledFooter className={className}>
      {footerConst.map(({ caption, Icon, to }) => (
        <StyledFooterLink href={to} key={to}>
          <StyledIconContainer>
            <IconButton rippleColor={theme.palette.footer.ripple}>
              <Icon />
            </IconButton>
            <StyledIconCaption>{caption}</StyledIconCaption>
          </StyledIconContainer>
        </StyledFooterLink>
      ))}
    </StyledFooter>
  )
}
