import styled, { css } from 'styled-components'

export const StyledDate = styled.span`
  ${({ theme }) => css`
    color: ${theme.palette.typography.light};
    display: block;
    font-size: 1.5rem;
  `}
`
