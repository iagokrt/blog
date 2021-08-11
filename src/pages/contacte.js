import React, {useRef, useState, useEffect} from "react"
import { Link, graphql } from "gatsby"

import {FaLinkedinIn as LinkedinIcon, FaGithub as GithubIcon, FaBehanceSquare as BehanceIcon} from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"
import projects from '../state/projects'

import Contact from  '../components/bio/contact' 
import Technologies from  '../components/bio/technologies'
import Bio from '../components/bio/bio'
import Navigation from '../components/blog/Navigation'

const Contacte = () => {
  return (
    <>
      <Navigation />
    </>
  )
}

export default Contacte
