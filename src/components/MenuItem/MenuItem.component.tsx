import React from 'react'

import { Icons } from '../../utils/const/Icons.map'
import { getIconFromIconsMapByTag } from '../../utils/functions/getIconFromIconsMapByTag'
import { getRandomIntegerInRange } from '../../utils/functions/getRandomIntegerInRange'
import { RippleEffect } from '../RippleEffect/RippleEffect.component'
import { StyledLink, StyledMenuItemText } from './MenuItem.styles'
import { MenuItemProps } from './MenuItem.types'

export const MenuItem: FCC<MenuItemProps> = ({ tags, children, className, to, minHue = 250, maxHue = 280 }) => {
  const menuItemHoverBackgroundColor = `hsl(${getRandomIntegerInRange(minHue, maxHue)}, 100%, 95%)`
  const menuItemRippleColor = `hsl(${getRandomIntegerInRange(minHue, maxHue)}, 100%, 85%)`
  const [{ Icon: MainIcon }, ...restIcons] = tags.map((tag) => ({
    Icon: getIconFromIconsMapByTag(Icons, tag),
    id: tag
  }))

  return (
    <StyledLink className={className} hoverBackgroundColor={menuItemHoverBackgroundColor} to={to}>
      <MainIcon />
      <StyledMenuItemText>{children}</StyledMenuItemText>
      {restIcons.map(({ Icon, id }) => (
        <Icon key={id} />
      ))}
      <RippleEffect color={menuItemRippleColor} duration={1200} />
    </StyledLink>
  )
}
