import styled, { css } from 'styled-components'

import { StyledLineProps } from './CodeHighlighter.types'

export const StyledLanguageBadge = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.palette.codeHighlighter.languageBadge};
    border-radius: 12px;
    color: ${theme.palette.codeHighlighter.languageBadgeText};
    padding: 8px;
    position: absolute;
    right: 12px;
    text-transform: uppercase;
    top: 12px;
  `}
`

export const StyledLineContent = styled.span`
  display: table-cell;
  padding-right: 8px;
`

export const StyledLineNumber = styled.span`
  display: table-cell;
  opacity: 0.5;
  padding-right: 8px;
  text-align: right;
  user-select: none;
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
    padding: 4px 20px;
    position: relative;
    width: 100%;
  `}
`

export const StyledCodeHighlighter = styled.pre`
  ${({ theme }) => css`
    background-color: ${theme.palette.codeHighlighter.background} !important;
    border-radius: 12px;
    font-size: 2rem;
    margin: 40px 0;
    overflow: auto;
    padding: 12px 0;
    position: relative;
  `}
`
