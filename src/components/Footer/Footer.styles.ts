import styled, { css } from 'styled-components'

import { Link } from '../Link/Link.component'

export const StyledFooterLink = styled(Link)`
  margin: 0 20px;
`

export const StyledIconCaption = styled.span`
  ${({ theme }) => css`
    bottom: -28px;
    color: ${theme.palette.footer.iconCaption};
    left: 50%;
    opacity: 0;
    position: absolute;
    text-align: center;
    transform: translateX(-50%);
    transition: 200ms opacity ease-in-out;
    width: 200px;

    ${theme.mediaQueries.below.tablet} {
      display: none;
    }
  `}
`

export const StyledIconContainer = styled.div`
  position: relative;

  svg {
    height: 40px;
    width: 40px;
  }

  &:hover {
    ${StyledIconCaption} {
      opacity: 1;
    }
  }
`

export const StyledFooter = styled.footer`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;

    &::after {
      background-color: ${theme.palette.footer.decoration};
      content: '';
      height: 1px;
      margin: 0 auto;
      position: absolute;
      top: 0;
      width: 80%;
    }
  `}
`
