import { ActionType } from 'plop'

import { componentConst } from './component.const'

export const componentActions: ActionType[] = [
  {
    path: `src/components/{{ ${componentConst.vars.name} }}/{{ ${componentConst.vars.name} }}.component.tsx`,
    template: require('./templates/template.component').template,
    type: 'add'
  },
  {
    path: `src/components/{{ ${componentConst.vars.name} }}/{{ ${componentConst.vars.name} }}.styles.ts`,
    template: require('./templates/template.styles').template,
    type: 'add'
  },
  {
    path: `src/components/{{ ${componentConst.vars.name} }}/{{ ${componentConst.vars.name} }}.types.ts`,
    template: require('./templates/template.types').template,
    type: 'add'
  }
]
