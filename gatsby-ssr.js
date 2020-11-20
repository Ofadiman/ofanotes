import React from 'react'

import { RootProvider } from './src/providers/Root.provider'

export const wrapPageElement = ({ element }) => <RootProvider>{element}</RootProvider>
