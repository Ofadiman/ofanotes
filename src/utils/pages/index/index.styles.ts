import styled, { css } from 'styled-components'

export const StyledSectionTitle = styled.h3`
  letter-spacing: 1px;
`

export const StyledPageTitle = styled.h1`
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
`

export const StyledMenuItemList = styled.ol`
  ${({ theme }) => css`
    display: grid;
    grid-row-gap: ${theme.spacing(3)};
    grid-template-columns: 1fr;
  `}
`

export const StyledIndexPage = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-row-gap: ${theme.spacing(10)};
    grid-template-columns: 1fr;
    margin: ${theme.spacing(10)} 0;
  `}
`
