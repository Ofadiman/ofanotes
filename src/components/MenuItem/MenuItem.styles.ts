import styled, { css } from 'styled-components'

import { Link } from '../Link/Link.component'
import { StyledMenuItemProps } from './MenuItem.types'

export const StyledMenuItemText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.body};
    flex-grow: 1;
    letter-spacing: 1px;
    overflow: hidden;
    padding: 0 16px;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
      color: ${theme.palette.menuItem.highlight};
      font-weight: bold;
    }
  `}
`

export const StyledLink = styled(Link)<StyledMenuItemProps>`
  ${({ hue }) => css`
    align-items: center;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    display: flex;
    height: 60px;
    justify-content: center;
    overflow: hidden;
    padding: 0 8px;
    position: relative;
    transition: background-color 200ms ease-in-out;

    &:hover {
      background-color: hsl(${hue}, 100%, 95%);
    }

    svg {
      height: 24px;
      margin: 8px;
      min-height: 24px;
      min-width: 24px;
      width: 24px;
    }
  `}
`
