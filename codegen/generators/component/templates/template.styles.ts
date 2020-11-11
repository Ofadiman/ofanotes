import { componentConst } from '../component.const'

export const template = `
import styled, { css } from 'styled-components'

export const Styled{{ ${componentConst.vars.name} }} = styled.div\`
  \${({ theme }) => css\`\`}
\`
`
