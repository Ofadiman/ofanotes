import styled, { css } from 'styled-components'

import { StyledMDXHeadingProps } from './MDXHeading.types'
import { getMDXHeadingIconSize } from './MDXHeading.utils'

export const StyledMDXHeading = styled.a<StyledMDXHeadingProps>`
  ${({ theme, headingType }) => css`
    align-items: center;
    display: inline-flex;
    justify-content: flex-start;
    text-decoration: none;

    svg {
      height: ${getMDXHeadingIconSize(headingType)};
      margin-left: 10px;
      fill: ${theme.palette.mdxHeading.svg};
      width: ${getMDXHeadingIconSize(headingType)};
    }

    &:hover {
      color: ${theme.palette.typography.main};
      text-decoration: underline;

      svg {
        fill: ${theme.palette.mdxHeading.svgHover};
      }
    }
  `}
`
