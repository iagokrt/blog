import React, { useState } from "react"
import { Link } from "gatsby"

import ellipse from '../../static/ellipse.png'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link id="title-home-link" to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        &larr; {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath} style={{cursor: `url(${ellipse}), auto`}}>
      <header className="global-header">
        {header} 
      </header>
      <main>
        {children}
      </main>
      <footer>
      <div>
      <h5 id="labs-link" className="text-blur-out"><a href="/labs">[NEW] Go To Laboratory ⚗️</a></h5>
    </div>
        © {new Date().getFullYear()}, Love is what affects our movements.
        <a href="https://www.github.com/iagokrt"> &nbsp; iagokrt &nbsp;</a>
      </footer>
    </div>
  )
}

export default Layout
