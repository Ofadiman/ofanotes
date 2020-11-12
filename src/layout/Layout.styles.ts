import styled, { css } from 'styled-components'

export const StyledMain = styled.main`
  ${({ theme }) => css`
    margin: ${theme.spacing(10)} auto;
    max-width: 1000px;
    width: 90%;
  `}
`

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 64px 1fr 100px;
  height: 100vh;
  overflow-y: auto;
`
