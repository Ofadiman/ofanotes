import { ActionType } from 'plop'

import { Component } from './component.const'

export const componentActions: ActionType[] = [
  {
    path: `src/components/{{ ${Component.Vars.Name} }}/{{ ${Component.Vars.Name} }}.component.tsx`,
    template: require('./templates/template.component').template,
    type: 'add'
  },
  {
    path: `src/components/{{ ${Component.Vars.Name} }}/{{ ${Component.Vars.Name} }}.styles.ts`,
    template: require('./templates/template.styles').template,
    type: 'add'
  },
  {
    path: `src/components/{{ ${Component.Vars.Name} }}/{{ ${Component.Vars.Name} }}.types.ts`,
    template: require('./templates/template.types').template,
    type: 'add'
  }
]
