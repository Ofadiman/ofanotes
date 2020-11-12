import styled, { css } from 'styled-components'

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
    grid-row-gap: ${theme.spacing(5)};
    grid-template-columns: 1fr;
  `}
`
