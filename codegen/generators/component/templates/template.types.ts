import { componentConst } from '../component.const'

export const template = `
export interface {{ ${componentConst.vars.name} }}Props {
  className?: string
}
`
