import React from "react"
//  import Image from "gatsby-image"

const HomeActions = () => {
    return (
        <aside className="buttons">  
            <a className="blog-ref" title="Read Blog" href="/blog">Blog</a>
            <a className="projects-ref" title="Projects Portfolio" href="/works">Projects</a>
            <a className="contact-ref" title="Professional Contact" href="/contacte">Contact</a>
            <a className="labs-ref" title="beta--webgl-experiments" href="/labs">[ NEW ] ⚗️ WebGL Experiments</a>
        </aside>
    )
}

export default HomeActions
