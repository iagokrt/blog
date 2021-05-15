import React, {useRef, useState} from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio/bio"
import Layout from "../components/layout"
import Title from '../components/blog/Title'

import Contact from '../components/bio/contact'

import SEO from "../components/seo"
import images from "../images/images"

import useWindowSize from '../hooks/useWindowSize'
import ProjectLinks from "../components/bio/projects/ProjectLinks"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  // const backgroundRef = useRef()
  const [favorite, setFavorite] = useState(true) 
  const [normal, setNormal] = useState(true) 

  const wrapperRef = useRef()

  const scrollContainer = useRef()



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
      <ProjectLinks />
      <article ref={wrapperRef} className="article-scroll">
      <aside ref={scrollContainer} id="scroller" className="scroll">
                {images.map((image, index) => (
                <>
                  <div key={index} className="img-container">
                    <img src={image} alt={`People ${index}`} />
                  </div>
                  <h2>
                    Test △ <span className="outline">Projects</span>
                  </h2>
                </>
                )
            )}
          </aside>
      </article>
     
      <Title />
      
      <div className="post-list-container">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <article
              key={post.fields.slug}
              className={favorite ? "post-list-item background-modify-y" : "post-list-item"} 
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
      <Contact />
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
