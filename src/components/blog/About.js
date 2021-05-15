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
                    <h2 className="about-me"> About Me</h2>
                    <h5 className="avatar-intro">coding, web development, html, css, three.js, glsl, coreldraw, reactjs, three-fiber, react native & node.js</h5>
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
