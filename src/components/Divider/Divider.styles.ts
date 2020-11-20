import styled, { css } from 'styled-components'

export const StyledDivider = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.divider.background};
    height: 1px;
    margin: 40px 0;
    width: 100%;
  `}
`
