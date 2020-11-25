import React from 'react'
import Helmet from 'react-helmet'

import { SEOProps } from './SEO.types'

export const SEO: FC<SEOProps> = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
)
