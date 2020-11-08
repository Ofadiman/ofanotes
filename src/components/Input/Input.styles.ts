import styled, { css } from 'styled-components'

import { StyledInputDecoratorProps, StyledInputLabelProps } from './Input.types'

export const StyledInputDecorator = styled.div<StyledInputDecoratorProps>`
  ${({ theme, isActive }) => css`
    background-color: ${theme.palette.input.decorator};
    bottom: 0;
    height: 2px;
    position: absolute;
    width: 100%;

    &::before {
      background-color: ${theme.palette.input.decoratorActive};
      content: '';
      height: 2px;
      position: absolute;
      transform: ${isActive ? 'scale(1)' : 'scale(0)'};
      transform-origin: center;
      transition: transform 200ms ease-in-out;
      width: 100%;
      z-index: 1;
    }
  `}
`

export const StyledInput = styled.input`
  ${({ theme }) => css`
    border: none;
    color: ${theme.palette.typography.main};
    font-size: 2rem;
    height: 100%;
    outline: none;
    width: 100%;
  `}
`

export const StyledInputLabel = styled.label<StyledInputLabelProps>`
  ${({ theme, isActive }) => css`
    color: ${theme.palette.typography.light};
    cursor: text;
    font-size: 2rem;
    position: absolute;
    top: ${isActive ? '0' : '50%'};
    transform: translateY(-50%) ${isActive ? 'scale(0.5)' : 'scale(1)'};
    transform-origin: left;
    transition: top 200ms ease-in-out, transform 200ms ease-in-out;
  `}
`

export const StyledInputWrapper = styled.div`
  ${({ theme }) => css`
    height: 40px;
    position: relative;
    width: 100%;

    &:hover {
      ${StyledInputDecorator} {
        background-color: ${theme.palette.input.decoratorHover};
      }
    }
  `}
`
