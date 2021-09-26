import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const About = () => {
    return (
        <>
            <aside className="about-me-container">
                <div>
                    <h2>
                        Hi, nice to meet you..
                        I will first present myself then I will show you my Art!
                    </h2>
                    <p className="">
                        Now that you're here at Write  Island, you can finally find contents related to: <br />
                        Coding, web development, html, css, three.js, glsl, coreldraw, reactjs, three-fiber, react native & node.js. 
                    </p>
                </div>
                <div className="img-avatar-container">
                </div>
            </aside>
        </>
    )
}

export default About
