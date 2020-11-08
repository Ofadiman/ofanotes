import { InputReducerActionTypes } from './Input.actions'
import { InputReducerAction } from './Input.types'

export class InputReducerState {
  public isActive: boolean = false
  public value: string = ''
}

export const inputReducer = (state: InputReducerState, action: InputReducerAction<unknown>): InputReducerState => {
  switch (action.type) {
    case InputReducerActionTypes.Change:
      return { ...state, value: (action as InputReducerAction<string>).payload }
    case InputReducerActionTypes.Focus:
      return { ...state, isActive: true }
    case InputReducerActionTypes.Blur:
      return { ...state, isActive: false }
    default:
      return state
  }
}
