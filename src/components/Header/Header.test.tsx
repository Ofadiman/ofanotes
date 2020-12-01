import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'

import { Header } from './Header.component'

describe.skip('<Header /> component', () => {
  const useStaticQueryMock = useStaticQuery as jest.Mock
  useStaticQueryMock.mockReturnValueOnce({
    site: {
      siteMetadata: {
        title: 'title'
      }
    }
  })

  it('should match inline snapshot', () => {
    const { asFragment } = render(<Header />)

    expect(asFragment()).toMatchInlineSnapshot()
  })
})
