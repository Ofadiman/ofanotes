import { ChangeEvent } from 'react'

import { InputReducerActionTypes } from './Input.actions'

export interface InputReducerAction<PayloadType> {
  payload: PayloadType
  type: InputReducerActionTypes
}

export interface InputProps {
  className?: string
  label: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  type: 'text' | 'password'
  value: string
}

export interface StyledInputLabelProps {
  isActive: boolean
}

export interface StyledInputDecoratorProps {
  isActive: boolean
}
