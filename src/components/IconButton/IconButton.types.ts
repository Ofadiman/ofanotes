export interface IconButtonProps {
  className?: string
  iconColor?: string
  iconHoverBackgroundColor?: string
  iconHoverColor?: string
  onClick?: () => void
  rippleColor?: string
  rippleDuration?: number
}

export interface StyledIconButtonProps
  extends Pick<IconButtonProps, 'iconColor' | 'iconHoverBackgroundColor' | 'iconHoverColor'> {}
