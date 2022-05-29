import React, {useRef, useState, useEffect} from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import Bio from "../components/bio/bio"
import HomeActions from '../components/blog/HomeActions'
import About from '../components/blog/About'
import Technologies from '../components/bio/technologies'
import Contact from '../components/bio/contact'
import Newsletter from "../components/blog/Newsletter"
import NewsTicker from '../components/blog/NewsTicker';
import TooltipGuided from '../components/blog/TooltipGuided';

import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="where are these posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="@iagokrt" />
     

      <HomeActions />
      
      
      <hr style={{backgroundColor: '#1f0411', height: '1.5px', width: '89%', marginBottom: '0'}}/>
     

      <About />

      <NewsTicker />
      <TooltipGuided />

      <Newsletter />
      <Contact />
      <Bio />
      <Technologies />
     
    </Layout>
  )
}
/**
 *  <h1 className="welcome-text" style={{textAlign: 'center', marginBottom: '52px'}}>
        <span style={{fontSize: '2rem', marginBottom: '22px'}}>Welcome!</span> <br/>
      </h1>
       <hr style={{backgroundColor: '#1f0411', height: '2px', border: '1px solid #1f0411 '}}/>
 */
export default BlogIndex

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
