import styled, { css } from 'styled-components'

import { StyledLineProps } from './CodeHighlighter.types'

export const StyledLanguageBadge = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.palette.codeHighlighter.languageBadge};
    border-radius: ${theme.bordering(3)};
    color: ${theme.palette.codeHighlighter.languageBadgeText};
    padding: ${theme.spacing(2)};
    position: absolute;
    right: ${theme.spacing(3)};
    text-transform: uppercase;
    top: ${theme.spacing(3)};
  `}
`

export const StyledLineContent = styled.span`
  ${({ theme }) => css`
    display: table-cell;
    padding-right: ${theme.spacing(2)};
  `}
`

export const StyledLineNumber = styled.span`
  ${({ theme }) => css`
    display: table-cell;
    opacity: 0.5;
    padding-right: ${theme.spacing(2)};
    text-align: right;
    user-select: none;
  `}
`

export const StyledLineDecoration = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.palette.codeHighlighter.lineDecorator};
    bottom: 0;
    left: 0;
    position: absolute;
    top: 0;
    width: 4px;
  `}
`

export const StyledLine = styled.div<StyledLineProps>`
  ${({ theme, isHighlighted }) => css`
    background-color: ${isHighlighted && theme.palette.codeHighlighter.lineHighlighted};
    padding: ${theme.spacing(1)} ${theme.spacing(5)};
    position: relative;
    width: 100%;
  `}
`

export const StyledCodeHighlighter = styled.pre`
  ${({ theme }) => css`
    background-color: ${theme.palette.codeHighlighter.background} !important;
    border-radius: ${theme.bordering(3)};
    font-size: 2rem;
    overflow: auto;
    padding: ${theme.spacing(3)} 0;
    position: relative;
  `}
`
