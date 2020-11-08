import React from 'react'

import { RippleEffect } from '../RippleEffect/RippleEffect.component'
import { StyledIconButton } from './IconButton.styles'
import { IconButtonProps } from './IconButton.types'

export const IconButton: FCC<IconButtonProps> = ({
  rippleDuration,
  children,
  onClick,
  className,
  iconColor,
  rippleColor
}) => (
  <StyledIconButton className={className} iconColor={iconColor} onClick={onClick}>
    {children}
    <RippleEffect color={rippleColor} duration={rippleDuration} />
  </StyledIconButton>
)
