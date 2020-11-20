/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import rangeParser from 'parse-numeric-range'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwlTheme from 'prism-react-renderer/themes/nightOwl'
import React, { useLayoutEffect, useRef, useState } from 'react'

import {
  StyledCodeHighlighter,
  StyledCodeHighlighterWrapper,
  StyledLanguageBadge,
  StyledLine,
  StyledLineContent,
  StyledLineDecoration,
  StyledLineNumber
} from './CodeHighlighter.styles'
import { CodeHighlighterProps } from './CodeHighlighter.types'

export const CodeHighlighter: FC<CodeHighlighterProps> = ({ codeString, language, metastring }) => {
  const [longestCodeLineWidth, setLongestCodeLineWidth] = useState<number | null>(null)
  const highlightedLinesRef = useRef<number[]>(
    metastring === undefined ? [] : rangeParser(metastring.replace(/[[\]]/gu, ''))
  )

  useLayoutEffect(() => {
    const lineContentSpans = document.querySelectorAll('.span-line-content')
    const lineNumberSpans = document.querySelectorAll('.span-line-number')
    const lineWidths = [...lineContentSpans].map((contentSpan, index) => {
      const horizontalPadding = 20

      return (
        contentSpan.getBoundingClientRect().width +
        lineNumberSpans[index].getBoundingClientRect().width +
        horizontalPadding
      )
    })
    setLongestCodeLineWidth(Math.max(...lineWidths))
  }, [])

  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={nightOwlTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledCodeHighlighterWrapper>
          {language && <StyledLanguageBadge>{language}</StyledLanguageBadge>}
          <StyledCodeHighlighter className={className} style={style}>
            {tokens.map((line, index) => {
              return (
                <StyledLine
                  isHighlighted={highlightedLinesRef.current.includes(index + 1)}
                  key={index}
                  width={longestCodeLineWidth === null ? undefined : longestCodeLineWidth}
                  {...getLineProps({ key: index, line })}
                >
                  {highlightedLinesRef.current.includes(index + 1) && <StyledLineDecoration />}
                  <StyledLineNumber className={'span-line-number'}>{index + 1}</StyledLineNumber>
                  <StyledLineContent className={'span-line-content'}>
                    {line.map((token, index) => {
                      return <span key={index} {...getTokenProps({ key: index, token })} />
                    })}
                  </StyledLineContent>
                </StyledLine>
              )
            })}
          </StyledCodeHighlighter>
        </StyledCodeHighlighterWrapper>
      )}
    </Highlight>
  )
}
