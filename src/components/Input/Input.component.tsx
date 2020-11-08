import React, { ChangeEvent, useReducer } from 'react'

import { inputActions } from './Input.actions'
import { inputReducer, InputReducerState } from './Input.reducer'
import { StyledInput, StyledInputDecorator, StyledInputLabel, StyledInputWrapper } from './Input.styles'
import { InputProps } from './Input.types'

export const Input: FC<InputProps> = ({ className, type, onChange, label }) => {
  const [state, dispatch] = useReducer(inputReducer, new InputReducerState())

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event)
    dispatch(inputActions.change(event.target.value))
  }

  const handleInputFocus = (): void => {
    dispatch(inputActions.focus())
  }

  const handleInputBlur = (): void => {
    dispatch(inputActions.blur())
  }

  return (
    <StyledInputWrapper className={className}>
      <StyledInputLabel htmlFor={label} isActive={state.isActive || state.value !== ''}>
        {label}
      </StyledInputLabel>
      <StyledInput
        id={label}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        type={type}
        value={state.value}
      />
      <StyledInputDecorator isActive={state.isActive} />
    </StyledInputWrapper>
  )
}
