import styled, { css } from 'styled-components'

import { StyledIconButtonProps } from './IconButton.types'

export const StyledIconButton = styled.div<StyledIconButtonProps>`
  ${({ theme, iconColor }) => css`
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    overflow: hidden;
    padding: ${theme.spacing(3)};
    position: relative;

    svg {
      fill: ${iconColor};
    }

    &:hover {
      background-color: ${theme.palette.primary.hoverBackground};
    }
  `}
`
