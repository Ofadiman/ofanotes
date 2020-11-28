import React from 'react'

import { StyledExamplesTitle } from './ExamplesTitle.styles'
import { ExamplesTitleProps } from './ExamplesTitle.types'

export const ExamplesTitle: FC<ExamplesTitleProps> = ({ className }) => {
  return <StyledExamplesTitle className={className}>{'Examples'}</StyledExamplesTitle>
}
