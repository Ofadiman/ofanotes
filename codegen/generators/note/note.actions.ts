import { ActionType } from 'plop'

import { noteConst } from './note.const'

export const noteActions: ActionType[] = [
  {
    path: `src/pages/notes/{{ kebabCase ${noteConst.vars.title} }}.mdx`,
    template: require('./templates/note.template').template,
    type: 'add'
  }
]
