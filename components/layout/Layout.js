import React from 'react'
import Navbar from './navbar'

const Layout = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
