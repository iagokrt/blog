import React from "react"
//  import Image from "gatsby-image"
// import Bio from "../bio/bio"

const NavigationMenu = () => {
    return (
        <aside className="buttons wrapper bio-wrapper navigator-menu">  
            <a className="home-button blog-ref" title="Read Blog" href="/blog">
                <span className="outline-reverse">Blog</span>. 
            </a>
            <a className="home-button projects-ref" title="Projects" href="/works">
                <span className="outline-reverse">Projects</span>. 
            </a>
            <a className="home-button contact-ref" title="Professional Contact" href="/about">
                <span className="outline-background">About</span>. 
            </a>
            <a className="home-button labs-ref" title="beta--webgl-experiments" href="/labs">
                <span className="outline-reverse">WebGL</span>.
            </a>
        </aside>
    )
}
/**
            <Bio /> 
 *  
 *  
 */
export default NavigationMenu
