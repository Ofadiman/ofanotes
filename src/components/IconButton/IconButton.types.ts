export interface IconButtonProps {
  className?: string
  iconColor?: string
  onClick?: () => void
  rippleColor?: string
  rippleDuration?: number
}

export interface StyledIconButtonProps extends Pick<IconButtonProps, 'iconColor'> {}
