import React from 'react'

export const Layout: FCC = ({ children }) => {
  return (
    <div>
      <header>{'header'}</header>
      {children}
      <footer>{'footer'}</footer>
    </div>
  )
}
