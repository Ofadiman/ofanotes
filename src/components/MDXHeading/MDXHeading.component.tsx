import React, { createElement, isValidElement, ReactElement } from 'react'

import LinkSvg from '../../assets/icons/link.inline.svg'
import { StyledMDXHeading } from './MDXHeading.styles'
import { HeadingType } from './MDXHeading.types'

export const createMDXHeading = (headingType: HeadingType): FCC => {
  const MDXHeading: FCC = ({ children }) => {
    if (isValidElement(children)) {
      const innerText = ((children as ReactElement).props as { children: string }).children

      const nestedChild = (
        <StyledMDXHeading headingType={headingType} href={`#${innerText}`} key={innerText}>
          {children}
          <LinkSvg key={innerText} />
        </StyledMDXHeading>
      )

      return createElement(headingType, { id: innerText }, [nestedChild])
    }

    const child = (
      <StyledMDXHeading headingType={headingType} href={`#${children as string}`} key={`#${children as string}`}>
        {children}
        <LinkSvg key={`#${children as string}`} />
      </StyledMDXHeading>
    )

    return createElement(headingType, { id: children }, [child])
  }

  return MDXHeading
}
