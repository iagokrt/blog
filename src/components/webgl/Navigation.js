import React from "react"
import { FaLinkedinIn as LinkedinIcon, FaGithub as GithubIcon, FaBehanceSquare as BehanceIcon } from 'react-icons/fa'

const overlay = {position: 'absolute', top: '500px'}

const Navigation = () => {
  return (
    <>
      <nav className="navigation-topbar">
        <ul>
          <li key={`navigation item-${Math.random(5)}`}>
            <a href="/" className="typograph"><span className="logo" title="back to writings">Write Island</span></a>
            
            <a href="/blog" className="typograph">
              <span>Laboratory v1.2 <span role="img" aria-label="experiments">⚗️</span></span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/iagobarreto/" className="icons first">
              <span className="" title="linkedin-profile">
                <LinkedinIcon size={32} color="white" />
              </span>
            </a>
            <a href="https://github.com/iagokrt" className="icons second">
              <span className="" title="github-profile">
                <GithubIcon size={32} color="white" />
              </span>
              </a>
            <a href="https://www.behance.net/iagokarneiro" className="icons third">
              <span className="" title="behance-profile">
                <BehanceIcon size={32} color="white" />
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div style={overlay}>
        <h2 className="labs-text">This is an <span className="outline">experimental</span> area for <span className="outline">webGL</span> programs</h2>
      </div>
    </>
  )
}
export default Navigation