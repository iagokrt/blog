import React, {useRef, useState, useEffect} from "react"
import { Link, graphql } from "gatsby"

import {FaLinkedinIn as LinkedinIcon, FaGithub as GithubIcon, FaTwitter as TwitterIcon} from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"
import projects from '../state/projects'

import useWindowSize from '../hooks/useWindowSize'
import Contact from  '../components/bio/contact' 
import Technologies from  '../components/bio/technologies'
import Bio from '../components/bio/bio'

const Contacte = () => {
  return (
    <>
    <nav className="skew-navigation">
          <ul style={{padding: '4px 8px'}}>
            <li key={`skew navigation item-${Math.random(5)}`}>
              <a href="/" className="typograph"><span className="logo" title="back to writings">Write Island</span></a>
            </li>
            <li>
              <a href="/https://www.linkedin.com/in/iagobarreto/" className="icons first"><span className="" title="contact-linkedin"><LinkedinIcon size={32} color="white" /></span></a>
              <a href="/https://github.com/iagokrt" className="icons second"><span className="" title="github-profile"><GithubIcon size={32} color="white" /></span></a>
              <a href="/https://github.com/iagokrt" className="icons third"><span className="" title="github-profile"><TwitterIcon size={32} color="white" /></span></a>
            </li>
          </ul>
    </nav>
    <Bio />
    <Contact />
    <Technologies />
    </>
  )
}

export default Contacte
