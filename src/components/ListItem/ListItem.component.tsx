import { globalHistory } from '@reach/router'
import React from 'react'

import { StyledListItem } from './ListItem.styles'
import { ListItemProps } from './ListItem.types'

export const ListItem: FCC<ListItemProps> = ({ className, children }) => (
  <StyledListItem
    className={className}
    isOnShortcutsPage={globalHistory.location.pathname === '/notes/webstorm-shortcuts/'}
  >
    {children}
  </StyledListItem>
)
