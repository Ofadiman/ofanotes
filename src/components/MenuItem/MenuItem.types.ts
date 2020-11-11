export interface MenuItemProps {
  className?: string
  highlight: string
  maxHue?: number
  minHue?: number
  tags: string[]
  text: string
  to: string
}

export interface StyledMenuItemProps {
  hue: number
}
