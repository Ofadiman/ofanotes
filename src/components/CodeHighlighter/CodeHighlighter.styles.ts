import styled, { css } from 'styled-components'

import { StyledLineProps } from './CodeHighlighter.types'

export const StyledLanguageBadge = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.palette.codeHighlighter.languageBadge};
    border-radius: 12px;
    color: ${theme.palette.codeHighlighter.languageBadgeText};
    font-size: 1.2rem;
    letter-spacing: 1px;
    padding: 8px;
    position: absolute;
    right: 0;
    text-transform: uppercase;
    top: 0;
    transform: translate(15px, -50%);
    z-index: 1;

    ${theme.mediaQueries.up.tablet} {
      transform: translate(15px, -37.5%);
    }

    ${theme.mediaQueries.up.desktop} {
      transform: translate(15px, -25%);
    }
  `}
`

export const StyledLineContent = styled.span`
  padding-right: 8px;
`

export const StyledLineNumber = styled.span`
  display: inline-block;
  opacity: 0.5;
  padding-right: 8px;
  text-align: right;
  user-select: none;
  width: 30px;
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
    min-width: 100%;
    padding: 4px 20px;
    position: relative;
    width: fit-content;
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
  `}
`

export const StyledCodeHighlighterWrapper = styled.div`
  position: relative;
`
