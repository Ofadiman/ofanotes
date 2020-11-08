import { green } from 'chalk'
import { Answers } from 'inquirer'

import { composeValidators } from '../../utils/functions/composeValidators'
import { requireInput } from '../../utils/functions/requireInput'
import { requirePascalCase } from '../../utils/functions/requirePascalCase'
import { PlopGeneratorConfig } from '../../utils/types/PlopGeneratorConfig.type'
import { componentActions } from './component.actions'
import { Component } from './component.const'

export const componentConfig: PlopGeneratorConfig = {
  actions: (answers: Answers | undefined) => {
    return answers?.[Component.Vars.ShouldGenerateCode] ? componentActions : []
  },
  description: 'Generate a component.',
  prompts: [
    {
      message: 'Component name (pascal case string):',
      name: Component.Vars.Name,
      type: 'input',
      validate: composeValidators(
        requireInput('Component name cannot be empty!'),
        requirePascalCase('Component must be in pascal case!')
      )
    },
    {
      choices: [
        { name: 'Yes', value: true },
        { name: 'No', value: false }
      ],
      message: (answers: Answers): string => {
        return `Do you want to generate ${green(answers[Component.Vars.Name])} component?`
      },
      name: Component.Vars.ShouldGenerateCode,
      type: 'list'
    }
  ]
}
