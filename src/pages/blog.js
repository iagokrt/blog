import React, {useRef, useState, useEffect} from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio/bio"
import Layout from "../components/layout"

import Contact from '../components/bio/contact'
import Technologies from '../components/bio/technologies'
import HomeActions from '../components/blog/HomeActions'
import Title from '../components/blog/Title'
import Newsletter from "../components/blog/Newsletter"


import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="where are these posts" />
        <Bio />
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
      <Title />
      <div className="post-list-container">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <article
              key={post.fields.slug}
              className={title ? "post-list-item background-modify-y" : "post-list-item"} 
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          )
        })}
      </div>
      <Newsletter />
      <Bio />
      <Contact />
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
