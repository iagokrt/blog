import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const About = () => {
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
            <aside className="about-me-container">
                <div>
                    <h2 className="about-me"> Welcome!</h2>
                    <h5 className="avatar-intro">
                        Now that you're here at Write  Island, you can finally find contents related to: Coding, web development, html, css, three.js, glsl, coreldraw, reactjs, three-fiber, react native & node.js. 
                        <br />
                        Dive into the blog to read more...
                    </h5>
                </div>
                <div className="img-avatar-container">
                    {unsplash && (
                        <Image
                            fixed={unsplash}
                            alt={`picture`}
                            imgStyle={{
                            borderRadius: `13px`,
                            }}
                        />
                    )}
                </div>
            </aside>
          
        </>
    )
}

export default About
