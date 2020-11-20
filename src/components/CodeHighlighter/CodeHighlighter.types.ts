import { Language } from 'prism-react-renderer'

export interface CodeHighlighterProps {
  codeString: string
  language: Language
  metastring: string | undefined
}

export interface StyledLineProps {
  isHighlighted: boolean
  width: number | undefined
}
