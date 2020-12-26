import styled, { css } from 'styled-components'

import { Link } from '../components/Link/Link.component'

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.palette.typography.light};
    display: block;
    margin-bottom: -40px;
    margin-left: auto;
    margin-top: 100px;
    text-decoration: none;
    width: fit-content;
  `}
`

export const StyledMain = styled.main`
  margin: 40px auto 120px;
  max-width: 1080px;
  padding: 0 40px;
  position: relative;
  width: 100%;

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
