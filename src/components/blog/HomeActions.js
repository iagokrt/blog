import React from "react"
//  import Image from "gatsby-image"

const HomeActions = () => {
    return (
        <aside className="buttons">  
            <a className="home-button blog-ref" title="Read Blog" href="/blog"><span  style={{fontSize: '29px'}} className="outline-reverse">Blog</span>. <br />
                Here you can read about web development and coding
            </a>
            <a className="home-button projects-ref" title="Projects Portfolio" href="/works">Projects. <br />
                Find and discover code and live demos for projects!
            </a>
            <a className="home-button contact-ref" title="Professional Contact" href="/contacte">Contact</a>
            <a className="home-button labs-ref" title="beta--webgl-experiments" href="/labs">[ NEW ] ⚗️ WebGL Experiments</a>
        </aside>
    )
}

export default HomeActions
