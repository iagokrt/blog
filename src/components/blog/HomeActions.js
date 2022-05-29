import React from "react"
//  import Image from "gatsby-image"
import Bio from "../bio/bio"

const HomeActions = () => {
    return (
        <aside className="buttons wrapper bio-wrapper">  
            <Bio /> 
            <a className="home-button blog-ref" title="Read Blog" href="/blog">
                <span className="outline-reverse">Blog</span>. 
            </a>
        </aside>
    )
}
/**
 *  
    <a className="home-button projects-ref" title="Projects" href="/works">
        <span className="outline-reverse">Projects</span>. 
    </a>
    <a className="home-button contact-ref" title="Professional Contact" href="/contacte">
        <span className="outline-background">Contact</span>. 
    </a>
    <a className="home-button labs-ref" title="beta--webgl-experiments" href="/labs" style={{flexDirection: 'column-reverse'}}>
        <span role="img" aria-label="alembic">⚗️</span>
        <span className="outline-reverse">WebGL Labs</span>
    </a>
 */
export default HomeActions
