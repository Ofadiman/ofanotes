import styled, { css } from 'styled-components'

import GithubIcon from '../../assets/icons/github.svg'

export const StyledGithubIcon = styled(GithubIcon)`
  ${({ theme }) => css`
    fill: ${theme.palette.header.text};
  `}
`

export const StyledHeaderTitle = styled.h1`
  ${({ theme }) => css`
    border-radius: ${theme.bordering(3)};
    color: ${theme.palette.header.text};
    cursor: pointer;
    font-size: 2.2rem;
    font-weight: normal;
    height: fit-content;
    letter-spacing: 2px;
    overflow: hidden;
    padding: ${theme.spacing(3)} ${theme.spacing(2)};
    position: relative;
    text-transform: uppercase;

    &:hover {
      color: ${theme.palette.header.textHover};
    }
  `}
`

export const StyledHeader = styled.header`
  ${({ theme }) => css`
    align-items: center;
    background: linear-gradient(
        14deg,
        rgba(91, 91, 91, 0.05) 0%,
        rgba(91, 91, 91, 0.05) 25%,
        rgba(242, 242, 242, 0.05) 25%,
        rgba(242, 242, 242, 0.05) 50%,
        rgba(100, 100, 100, 0.05) 50%,
        rgba(100, 100, 100, 0.05) 75%,
        rgba(249, 249, 249, 0.05) 75%,
        rgba(249, 249, 249, 0.05) 100%
      ),
      linear-gradient(
        12deg,
        rgba(44, 44, 44, 0.05) 0%,
        rgba(44, 44, 44, 0.05) 25%,
        rgba(41, 41, 41, 0.05) 25%,
        rgba(41, 41, 41, 0.05) 50%,
        rgba(139, 139, 139, 0.05) 50%,
        rgba(139, 139, 139, 0.05) 75%,
        rgba(250, 250, 250, 0.05) 75%,
        rgba(250, 250, 250, 0.05) 100%
      ),
      linear-gradient(
        144deg,
        rgba(111, 111, 111, 0.05) 0%,
        rgba(111, 111, 111, 0.05) 25%,
        rgba(205, 205, 205, 0.05) 25%,
        rgba(205, 205, 205, 0.05) 50%,
        rgba(184, 184, 184, 0.05) 50%,
        rgba(184, 184, 184, 0.05) 75%,
        rgba(152, 152, 152, 0.05) 75%,
        rgba(152, 152, 152, 0.05) 100%
      ),
      linear-gradient(90deg, ${theme.palette.header.backgroundLight}, ${theme.palette.header.backgroundDark});
    display: flex;
    height: 64px;
    justify-content: space-between;
    padding: 0 ${theme.spacing(5)};
  `}
`
