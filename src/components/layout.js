import React from "react"
import { Link } from "gatsby"

// import ellipse from '../../static/ellipse.png'
// import CustomCursor from '../components/CustomCursor'
import footer from '../state/footer'

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
      <div className="anim-wrapper">
        <Link className="header-link-home logo anim fromright" to="/">
          &larr; {title}
        </Link>
      </div>
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
      <footer className="footer" style={{fontSize: '0.8rem', marginTop: '2rem'}}>
        <p style={{margin: '0 10px'}}>{footer.copyr}</p>
        <span>{footer.title}</span>
        <a href={footer.url} target="_blank" rel="noreferrer"> &nbsp;iago&nbsp;</a>
      </footer>
    </div>
  )
}

export default Layout
