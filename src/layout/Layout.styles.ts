import styled, { css } from 'styled-components'

import { StyledMainProps } from './Layout.types'

export const StyledMain = styled.main<StyledMainProps>`
  ${({ width }) => css`
    margin: 40px auto 120px;
    max-width: 1000px;
    width: ${width === null ? undefined : `${width - 80}px`};

    #gatsby-focus-wrapper {
      display: flex;
      flex-flow: column;
      height: 100%;
      width: 100%;
    }
  `}
`

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 64px 1fr 150px;
  height: 100vh;
  overflow-y: auto;
`
