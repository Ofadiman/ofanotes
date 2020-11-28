import styled, { css } from 'styled-components'

export const StyledExamplesTitle = styled.span`
  ${({ theme }) => css`
    ${theme.typography.h3};
  `}
`
