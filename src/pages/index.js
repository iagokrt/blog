import React, {useRef, useState, useEffect} from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import Bio from "../components/bio/bio"
import HomeActions from '../components/blog/HomeActions'
import About from '../components/blog/About'
import Technologies from '../components/bio/technologies'
import Contact from '../components/bio/contact'
import Newsletter from "../components/blog/Newsletter"

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
      <h5>Launching openGL shader code experiments!</h5>
      <h6>Navigate between lab experiments to enjoy some magic shaders!</h6>
      <ul>
        <li className="shader-examples-list">
          <a href="/labs">Laboratory V1</a>
          <a href="/particles">Particles Shaders</a>
        </li>
      </ul>
      <HomeActions />
      <Technologies />
    </Layout>
  )
}

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
