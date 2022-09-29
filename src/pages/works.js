import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projects_webdev from '../state/projects_webdev'
// import projects_shaders from '../state/projects_webdev_shaders'
// import projects_visual_communication from '../state/projects_visual_communication'
// import projects_arduino from '../state/projects_arduino'

const Works = ({data, location}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio" />
      <h1 className="portfolio-title">
        <span class="outline">Works</span> - Portfolio - <span class="outline">Ideas</span>
      </h1>
      <hr style={{backgroundColor: 'crimson', height: '1.5px', width: '50%', marginBottom: '0'}}/>

      <article  className="scroll-container">
        {/* Web developer portfolio */}
        <div className="work-category web-developer">

          <h1 className="portfolio-title"> Web Development </h1>
          {projects_webdev.map((project, index) => (
              <div key={index} className="project-wrapper">
                
                <section className="project-section">
                  <div className="project-image-container">
                    {project.image ? '' : ''}
                    <img src={project.image ? project.image : '' } alt={`Project ${index}`} />
                  </div>
                  <div>
                    <h2 className="">
                      {project.title} <span className="outline">{project.subtitle}</span>
                    </h2>
                    <h4 className="project-description">
                      {project.description}
                    </h4>
                  </div>
                </section>
              </div>
          )
          )}
        </div>
        
        {/* visual-communication portfolio */}
        <div className="work-category visual-communication">
          <hr style={{backgroundColor: '#1f0411', height: '1.5px', width: '95%', marginBottom: '0'}}/>

          <h1 className="portfolio-title"> Visual Communication <span class="outline">Design</span></h1>
        </div>

        {/* webgl portfolio */}
        <div className="work-category webgl-programming">
          <hr style={{backgroundColor: '#1f0411', height: '1.5px', width: '95%', marginBottom: '0'}}/>

          <h1 className="portfolio-title"> Shader Coding <span className="outline">GLSL Code</span> </h1>
        </div>

        {/* arduino portfolio */}
        <div className="work-category arduino-prototyping">
          <hr style={{backgroundColor: '#1f0411', height: '1.5px', width: '95%', marginBottom: '0'}}/>

          <h1 className="portfolio-title"> Arduino & Prototypes </h1>
         
        </div>
      </article>
    </Layout>
  )
}

export default Works

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