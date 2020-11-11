import chalk from 'chalk'
import { Answers } from 'inquirer'

import { Tags } from '../../../src/utils/const/Tags.enum'
import { composeValidators } from '../../utils/functions/composeValidators'
import { requireInput } from '../../utils/functions/requireInput'
import { PlopGeneratorConfig } from '../../utils/types/PlopGeneratorConfig.type'
import { noteActions } from './note.actions'
import { noteConst } from './note.const'

export const noteConfig: PlopGeneratorConfig = {
  actions: (answers) => {
    if (answers?.[noteConst.vars.shouldGenerateCode]) {
      answers[noteConst.vars.createdAt] = new Date().toISOString().split('T')[0].split('-').reverse().join('-')
      answers[noteConst.vars.title] = answers[noteConst.vars.title].replace(/ +/gu, ' ').trim()

      if (answers[noteConst.vars.tags].length > 1) {
        answers[noteConst.vars.tags] = [
          answers[noteConst.vars.mainTag],
          ...answers[noteConst.vars.tags].filter((tag: string) => tag !== answers[noteConst.vars.mainTag])
        ]
      }

      return noteActions
    }

    return []
  },
  description: 'Generate a note.',
  prompts: [
    {
      message: 'Note title:',
      name: noteConst.vars.title,
      type: 'input',
      validate: composeValidators(requireInput('Note title is required!'))
    },
    {
      choices: Object.values(Tags).sort(),
      message: 'Select tags.',
      name: noteConst.vars.tags,
      type: 'checkbox'
    },
    {
      choices: (answers: Answers): string[] => {
        return answers[noteConst.vars.tags].sort()
      },
      message: 'Select main tag.',
      name: noteConst.vars.mainTag,
      type: 'list',
      when: (answers: Answers): boolean => {
        return answers[noteConst.vars.tags].length > 1
      }
    },
    {
      choices: [
        { name: 'Yes', value: true },
        { name: 'No', value: false }
      ],
      message: (answers: Answers): string => {
        return `Do you want to generate ${chalk.green(answers[noteConst.vars.title].replace(/ +/gu, ' ').trim())} note?`
      },
      name: noteConst.vars.shouldGenerateCode,
      type: 'list'
    }
  ]
}
