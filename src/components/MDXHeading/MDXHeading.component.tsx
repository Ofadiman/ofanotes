import { paramCase } from 'change-case'
import React, { createElement, isValidElement, ReactElement } from 'react'

import LinkSvg from '../../assets/icons/link.inline.svg'
import { StyledMDXHeading } from './MDXHeading.styles'
import { HeadingConfig, HeadingType } from './MDXHeading.types'
import { getTextFromChildren } from './MDXHeading.utils'

export const createMDXHeading = (headingType: HeadingType): FCC => {
  const MDXHeading: FCC = ({ children }) => {
    const { headingId, href } = ((): HeadingConfig => {
      /**
       * @description `children` is an array of elements or strings e.g. code block written with backticks and string.
       * @example `SELECT` keyword examples
       */
      if (Array.isArray(children)) {
        const testStrings = children.map((element) => {
          return getTextFromChildren(element as ReactElement)
        })
        const headingId = paramCase(testStrings.join(''))
        const href = `#${headingId}`

        return { headingId, href }
      }

      /**
       * @description `children` is a React element e.g. code block written in backticks.
       * @example `window.navigation.assign`
       */
      if (isValidElement(children)) {
        const headingId = paramCase(((children as ReactElement).props as { children: string }).children)
        const href = `#${headingId}`

        return { headingId, href }
      }

      /**
       * @description `children` is string.
       * @example Mocking browser APIs in Jest
       */
      const headingId = paramCase(children as string)
      const href = `#${headingId}`

      return { headingId, href }
    })()

    const newChildren = (
      <StyledMDXHeading headingType={headingType} href={href} key={headingId}>
        {children}
        <LinkSvg key={headingId} />
      </StyledMDXHeading>
    )

    return createElement(headingType, { id: headingId }, [newChildren])
  }

  return MDXHeading
}
