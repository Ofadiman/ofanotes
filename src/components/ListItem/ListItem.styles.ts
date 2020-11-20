import styled, { css } from 'styled-components'

import { StyledListItemProps } from './ListItem.types'

export const StyledListItem = styled.li<StyledListItemProps>`
  ${({ isOnShortcutsPage }) => css`
    font-size: ${isOnShortcutsPage && '2.2rem'};
  `}
`
