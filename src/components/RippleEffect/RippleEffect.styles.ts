import styled, { css } from 'styled-components'

import { StyledRippleEffectProps } from './RippleEffect.types'

export const StyledRippleEffect = styled.span<StyledRippleEffectProps>`
  ${({ color, duration, size, offsetLeft, offsetTop }) => css`
    animation-duration: ${duration}ms;
    animation-name: ripple;
    background-color: ${color};
    border-radius: 100%;
    height: ${size}px;
    left: ${offsetLeft}px;
    opacity: 0.75;
    position: absolute;
    top: ${offsetTop}px;
    transform: scale(0);
    width: ${size}px;

    @keyframes ripple {
      to {
        opacity: 0;
        transform: scale(3);
      }
    }
  `}
`

export const StyledRippleEffectContainer = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`
