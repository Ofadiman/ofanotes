import rangeParser from 'parse-numeric-range'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwlTheme from 'prism-react-renderer/themes/nightOwl'
import React, { useRef } from 'react'

import {
  StyledCodeHighlighter,
  StyledLanguageBadge,
  StyledLine,
  StyledLineContent,
  StyledLineDecoration,
  StyledLineNumber
} from './CodeHighlighter.styles'
import { CodeHighlighterProps } from './CodeHighlighter.types'

export const CodeHighlighter: FC<CodeHighlighterProps> = ({ codeString, language, metastring }) => {
  const highlightedLinesRef = useRef<number[]>(
    metastring === undefined ? [] : rangeParser(metastring.replace(/[[\]]/gu, ''))
  )

  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={nightOwlTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledCodeHighlighter className={className} style={style}>
          <StyledLanguageBadge>{language}</StyledLanguageBadge>
          {tokens.map((line, index) => {
            return (
              <StyledLine
                isHighlighted={highlightedLinesRef.current.includes(index + 1)}
                key={index}
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
      )}
    </Highlight>
  )
}
