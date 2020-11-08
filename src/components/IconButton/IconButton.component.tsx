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
  rippleColor,
  iconHoverBackgroundColor,
  iconHoverColor
}) => (
  <StyledIconButton
    className={className}
    iconColor={iconColor}
    iconHoverBackgroundColor={iconHoverBackgroundColor}
    iconHoverColor={iconHoverColor}
    onClick={onClick}
  >
    {children}
    <RippleEffect color={rippleColor} duration={rippleDuration} />
  </StyledIconButton>
)
