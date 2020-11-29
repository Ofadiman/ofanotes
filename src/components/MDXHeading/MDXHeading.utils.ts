import { isValidElement, ReactElement } from 'react'

import { HeadingType } from './MDXHeading.types'

export const getMDXHeadingIconSize = (headingType: HeadingType): string => {
  switch (headingType) {
    case 'h1':
      return '40px'
    case 'h2':
      return '35px'
    case 'h3':
      return '30px'
    case 'h4':
      return '25px'
    case 'h5':
      return '20px'
    case 'h6':
      return '15px'
    default:
      return '15px'
  }
}

export const getTextFromChildren = (children: ReactElement | string): string => {
  if (isValidElement(children)) {
    return getTextFromChildren((children.props as { children: ReactElement | string }).children)
  }

  return children
}
