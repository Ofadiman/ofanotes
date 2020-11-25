import React from 'react'

import { SEO } from '../SEO/SEO.component'
import { StyledDate } from './MDXHeadingOne.styles'
import { MDXHeadingOneProps } from './MDXHeadingOne.types'

export const MDXHeadingOne: FC<MDXHeadingOneProps> = ({ className, children }) => {
  if (typeof children === 'string') {
    return (
      <>
        <SEO title={children} />
        <h1 className={className}>{children}</h1>
      </>
    )
  }

  const [title, date] = children

  return (
    <>
      <SEO title={title} />
      <h1 className={className}>
        {title}
        <StyledDate>{date.replace(/]|\[/g, '')}</StyledDate>
      </h1>
    </>
  )
}
