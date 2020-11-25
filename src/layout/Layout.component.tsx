import { useLocation } from '@reach/router'
import React, { useLayoutEffect, useState } from 'react'

import { Footer } from '../components/Footer/Footer.component'
import { Header } from '../components/Header/Header.component'
import { StyledLayout, StyledLink, StyledMain } from './Layout.styles'

export const Layout: FCC = ({ children }) => {
  const [width, setWidth] = useState<number | null>(null)
  const { pathname } = useLocation()
  const isOnNotePage = pathname.startsWith('/notes/')

  useLayoutEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <StyledLayout>
      {width !== null && (
        <>
          <Header />
          <StyledMain width={width}>
            {children}
            {isOnNotePage && (
              <StyledLink
                href={`https://github.com/Ofadiman/ofanotes/blob/main/src/pages${pathname.slice(0, -1)}.mdx`}
              >{`Edit on github`}</StyledLink>
            )}
          </StyledMain>
          <Footer />
        </>
      )}
    </StyledLayout>
  )
}
