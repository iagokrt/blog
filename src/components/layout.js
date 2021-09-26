import React, { useState } from "react"
import { Link } from "gatsby"

import ellipse from '../../static/ellipse.png'
// import CustomCursor from '../components/CustomCursor'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading logo">
        <Link id="title-home-link" to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home logo" to="/">
        &larr; {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath} >
      <header className="global-header">
        {header} 
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p style={{margin: '0 10px'}}> © {new Date().getFullYear()}, Write Island.</p>
        <a href="https://www.github.com/iagokrt"> &nbsp; iagokrt &nbsp;</a>
      </footer>
    </div>
  )
}

export default Layout
