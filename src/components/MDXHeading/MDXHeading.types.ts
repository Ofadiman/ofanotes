export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface StyledMDXHeadingProps {
  headingType: HeadingType
}

export interface HeadingConfig {
  headingId: string
  href: string
}
