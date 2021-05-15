import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Drago from '../../static/drago.gif';

// import { Canvas } from '@react-three/fiber'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <article className="notfound">
        <SEO title="404: Not Found" />
        <h1>404 Not found</h1>
        <aside>
          <img src={Drago} alt="oops" />
        </aside>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </article>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
