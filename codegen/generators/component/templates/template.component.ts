import { Component } from '../component.const'

export const template = `
import React from 'react'

import { Styled{{ ${Component.Vars.Name} }} } from './{{ ${Component.Vars.Name} }}.styles'
import { {{ ${Component.Vars.Name} }}Props } from './{{ ${Component.Vars.Name} }}.types'

export const {{ ${Component.Vars.Name} }}: FC<{{ ${Component.Vars.Name} }}Props> = ({ className }) => {
  return <Styled{{ ${Component.Vars.Name} }} className={className}>{\`{{ ${Component.Vars.Name} }}\`}</Styled{{ ${Component.Vars.Name} }}>
}
`
