import { green } from 'chalk'
import { NodePlopAPI } from 'plop'

import { componentConfig } from './codegen/generators/component/component.config'
import { Component } from './codegen/generators/component/component.const'

export default function plopGenerator(plop: NodePlopAPI): void {
  plop.setWelcomeMessage(`${green('[Codegen]')} What do you want to generate?`)

  plop.setGenerator(Component.Generator, componentConfig)
}
