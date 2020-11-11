import React, { ChangeEvent, useState } from 'react'

import { Input } from '../components/Input/Input.component'
import { MenuItem } from '../components/MenuItem/MenuItem.component'
import { Tags } from '../utils/const/Tags.enum'

export default function Home(): JSX.Element {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  return (
    <>
      <div style={{ margin: '20px 0' }}>
        <Input label={'Browse notes...'} onChange={handleInputChange} type={'text'} value={inputValue} />
      </div>
      <div>
        <MenuItem tags={[Tags.JavaScript, Tags.TypeScript]} to={'/'}>
          {
            'It is a solid alignment, sir. Evasive stars, to the infinity room. Small, ship-wide dosis virtually experience a carnivorous, distant space.'
          }
        </MenuItem>
        <MenuItem tags={[Tags.JavaScript, Tags.TypeScript, Tags.CSS, Tags.React]} to={'/'}>
          {'The core is a futile transformator.'}
        </MenuItem>
      </div>
    </>
  )
}
