import styled, { css } from 'styled-components'

import { Link } from '../Link/Link.component'
import { StyledMenuItemProps } from './MenuItem.types'

export const StyledMenuItemText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.button};
    flex-grow: 1;
    letter-spacing: 1px;
    overflow: hidden;
    padding: 0 ${theme.spacing(4)};
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`

export const StyledLink = styled(Link)<StyledMenuItemProps>`
  ${({ theme, hoverBackgroundColor }) => css`
    align-items: center;
    border-radius: ${theme.bordering(1)};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    display: flex;
    height: 60px;
    justify-content: center;
    overflow: hidden;
    padding: 0 ${theme.spacing(2)};
    position: relative;
    transition: background-color 200ms ease-in-out;

    &:hover {
      background-color: ${hoverBackgroundColor};
    }

    svg {
      height: 24px;
      margin: ${theme.spacing(2)};
      min-height: 24px;
      min-width: 24px;
      width: 24px;
    }
  `}
`
