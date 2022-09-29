import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import projects from '../state/projects'

import Contact from  '../components/bio/contact' 
// import Technologies from  '../components/bio/technologies'
import TechnologiesTools from  '../components/bio/technologies_tools'

// import Bio from '../components/bio/bio'
// import Navigation from '../components/blog/Navigation'

const About = ({data, location}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes
  
  return (
    <>
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <article>
        <h2>
          <span>
            We <span className="outline"> write</span> 
            <span className="outline-reverse"> code</span> and strive for
            <span className="outline-reverse"> building </span> 
            <span className="outline"> art. </span>
          </span>
        </h2>
        <h4 className="about-content">
          I begin learning about computer graphics early in life. <br /><br />
          So when I started to code, every project
          I designed was kinda related to
          a previous artistic background. <br /><br />
          I'm currently working as a frontend programmer for Compass.OUL<br /><br />
          All my projects and websites are 
          related to my will of mixing
          technological tools with the design
          of things, aspiring on nature.
        </h4>
      </article>

      <div className="badges-container">
        <Contact />
        <TechnologiesTools />
      </div>
    </Layout>
    </>
  )
}

export default About

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        description
      }
    }
  }
}
`
