import React, { ReactElement } from 'react'

import { Icons } from '../../utils/const/Icons.map'
import { getIconFromIconsMapByTag } from '../../utils/functions/getIconFromIconsMapByTag'
import { getRandomIntegerInRange } from '../../utils/functions/getRandomIntegerInRange'
import { RippleEffect } from '../RippleEffect/RippleEffect.component'
import { StyledLink, StyledMenuItemText } from './MenuItem.styles'
import { MenuItemProps } from './MenuItem.types'

export const MenuItem: FC<MenuItemProps> = ({ highlight, tags, text, className, to, minHue = 250, maxHue = 280 }) => {
  const hue = getRandomIntegerInRange(minHue, maxHue)
  const [{ Icon: MainIcon }, ...restIcons] = tags.map((tag) => ({
    Icon: getIconFromIconsMapByTag(Icons, tag),
    id: tag
  }))

  const renderMenuItemText = (): string | ReactElement => {
    let highlighted = ''
    const splitArray = text
      .replace(new RegExp(highlight, 'i'), (matchedValue) => {
        highlighted = matchedValue

        return '$SPLIT$'
      })
      .split('$SPLIT$')

    return highlight === '' ? (
      text
    ) : (
      <>
        {splitArray[0]}
        <span>{highlighted}</span>
        {splitArray[1]}
      </>
    )
  }

  return (
    <StyledLink className={className} hue={hue} to={to}>
      <MainIcon />
      <StyledMenuItemText>{renderMenuItemText()}</StyledMenuItemText>
      {restIcons.map(({ Icon, id }) => (
        <Icon key={id} />
      ))}
      <RippleEffect color={`hsl(${hue}, 100%, 85%)`} duration={1200} />
    </StyledLink>
  )
}
