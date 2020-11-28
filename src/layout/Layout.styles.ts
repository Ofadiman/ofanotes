import styled, { css } from 'styled-components'

import { Link } from '../components/Link/Link.component'

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    bottom: -60px;
    color: ${theme.palette.typography.light};
    position: absolute;
    right: 0;
    text-decoration: none;
  `}
`

export const StyledMain = styled.main`
  margin: 40px auto 120px;
  max-width: 1000px;
  position: relative;

  #gatsby-focus-wrapper {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
  }
`

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 64px 1fr 150px;
  height: 100vh;
  overflow-y: auto;
`
