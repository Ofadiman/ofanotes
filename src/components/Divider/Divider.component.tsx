import React from 'react'

import { StyledDivider } from './Divider.styles'
import { DividerProps } from './Divider.types'

export const Divider: FC<DividerProps> = ({ className }) => <StyledDivider className={className} />
