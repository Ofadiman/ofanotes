import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import { StyledLinkProps } from './Link.types'

export const StyledGatsbyLink = styled(Link)`
  text-decoration: none;
`

export const StyledLink = styled.a<StyledLinkProps>`
  ${({ isOnResourcePage }) => css`
    text-decoration: ${isOnResourcePage ? 'none' : 'underline'};
  `}
`
