import React, { ChangeEvent, useState } from 'react'

import { Input } from '../components/Input/Input.component'

export default function Home(): JSX.Element {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <Input label={'Browse notes...'} onChange={handleInputChange} type={'text'} value={inputValue} />
    </div>
  )
}
