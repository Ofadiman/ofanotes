import React, { MouseEvent, useLayoutEffect, useState } from 'react'

import { StyledRippleEffect, StyledRippleEffectContainer } from './RippleEffect.styles'
import { RippleEffectData, RippleEffectProps } from './RippleEffect.types'

export const RippleEffect: FC<RippleEffectProps> = ({ className, color = 'hsl(0, 100%, 100%)', duration = 800 }) => {
  const [rippleArray, setRippleArray] = useState<RippleEffectData[]>([])

  useLayoutEffect(() => {
    let timeout: number
    if (rippleArray.length > 0) {
      timeout = setTimeout(() => {
        setRippleArray([])
        clearTimeout(timeout)
      }, duration * 4)
    }

    return () => clearTimeout(timeout)
  }, [rippleArray.length, duration])

  const addRipple = (event: MouseEvent): void => {
    const rippleContainer = event.currentTarget.getBoundingClientRect()

    const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height
    const offsetLeft = event.pageX - rippleContainer.x - rippleContainer.width / 2
    const offsetTop = event.pageY - rippleContainer.y - rippleContainer.width / 2
    const id = Math.random()

    setRippleArray((prevState) => [...prevState, { id, offsetLeft, offsetTop, size }])
  }

  return (
    <StyledRippleEffectContainer className={className} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map(({ id, size, offsetLeft, offsetTop }) => (
          <StyledRippleEffect
            color={color}
            duration={duration}
            key={id}
            offsetLeft={offsetLeft}
            offsetTop={offsetTop}
            size={size}
          />
        ))}
    </StyledRippleEffectContainer>
  )
}
