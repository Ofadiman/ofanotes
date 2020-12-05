import styled, { css } from 'styled-components'

import { Link } from '../Link/Link.component'

export const StyledDate = styled.span`
  ${({ theme }) => css`
    color: ${theme.palette.typography.light};
    display: block;
    font-size: 1.5rem;
  `}
`

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    &:hover {
      color: ${theme.palette.mdxIntro.link};
      text-decoration: underline;
    }
  `}
`
