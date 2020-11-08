export interface RippleEffectProps {
  className?: string
  color?: string
  duration?: number
}

export interface RippleEffectData {
  id: number
  offsetLeft: number
  offsetTop: number
  size: number
}

export interface StyledRippleEffectProps
  extends Pick<RippleEffectProps, 'color' | 'duration'>,
    Pick<RippleEffectData, 'size' | 'offsetLeft' | 'offsetTop'> {}
