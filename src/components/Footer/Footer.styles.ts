import styled, { css } from 'styled-components'

export const StyledIconCaption = styled.span`
  ${({ theme }) => css`
    bottom: -${theme.spacing(7)};
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
  ${({ theme }) => css`
    padding: 0 ${theme.spacing(5)};
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
  `}
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
