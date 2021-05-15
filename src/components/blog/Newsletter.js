import React from "react"
import Image from "gatsby-image"
//   <h3>coding, web development, html, css, three.js, glsl, coreldraw, reactjs, three-fiber, react native & node.js</h3>
import { useStaticQuery, graphql } from "gatsby"

const Newsletter = () => {
  const data = useStaticQuery(graphql`
  query UnsplashQuery {
    unplash: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  
  const unsplash = data?.unplash?.childImageSharp?.fixed;

  return (
     <>
     <div>
      {unsplash && (
        <Image
          fixed={unsplash}
          alt={`picture`}
          className="image-unsplash"
          imgStyle={{
            borderRadius: `8px`,
          }}
        />
      )}
     </div>
    <div className="section-links article-container" id="article-container">
      <article className="article-ref">
        <a
          href="#"
          className="article-link"
        >
          <p className="article-ph">Computação gráfica</p>
          <h3 className="">
            <span className="">Computação gráfica</span>
            <span className=""> coreldraw and css convertion</span>
          </h3>
        </a>
      </article>
      <article className="">
        <a
          href="#"
          className="article-link"
        >
          <p className="article-ph">shaders</p>
          <h3 className="">
            <span className="outline-fill">Coding with </span>
            <span className="outline-reverse"> shaders</span>
          </h3>
        </a>
      </article>
    </div>
    </>
    )
}
 
export default Newsletter
 