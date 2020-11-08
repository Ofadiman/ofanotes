import styled, { css } from 'styled-components'

import { StyledIconButtonProps } from './IconButton.types'

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  ${({ theme, iconColor, iconHoverBackgroundColor, iconHoverColor }) => css`
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    outline: none;
    overflow: hidden;
    padding: ${theme.spacing(3)};
    position: relative;

    svg {
      fill: ${iconColor};
      height: 30px;
      width: 30px;
    }

    &:hover {
      background-color: ${iconHoverBackgroundColor};

      svg {
        fill: ${iconHoverColor};
      }
    }
  `}
`
