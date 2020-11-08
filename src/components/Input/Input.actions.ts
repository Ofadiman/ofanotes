import { InputReducerAction } from './Input.types'

export enum InputReducerActionTypes {
  Blur = 'Blur',
  Change = 'Change',
  Focus = 'Focus'
}

export const inputActions = {
  blur: (): InputReducerAction<null> => ({ payload: null, type: InputReducerActionTypes.Blur }),
  change: (value: string): InputReducerAction<string> => ({ payload: value, type: InputReducerActionTypes.Change }),
  focus: (): InputReducerAction<null> => ({ payload: null, type: InputReducerActionTypes.Focus })
}
