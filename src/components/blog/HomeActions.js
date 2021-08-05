import React from "react"
//  import Image from "gatsby-image"

const HomeActions = () => {
    return (
        <aside className="buttons">  
            <a className="home-button blog-ref" title="Read Blog" href="/blog"><span  style={{fontSize: '29px'}} className="outline-reverse">Blog</span>. <br />
                Here you can read about web development and coding
            </a>
            <a className="home-button projects-ref" title="Projects Portfolio" href="/works"><span  style={{fontSize: '29px'}} className="outline-reverse">Projects</span>. <br />
                Find and discover code and live demos for projects!
            </a>
             <a className="home-button contact-ref" title="Professional Contact" href="/contacte"><span  style={{fontSize: '29px'}} className="outline-background">Contact Info</span></a>
                <a className="home-button labs-ref" title="beta--webgl-experiments" href="/labs">[ NEW ] <span  style={{fontSize: '29px'}} className="outline"><span role="img" aria-label="alembic">⚗️</span> WebGL Labs</span>
                </a>
        </aside>
    )
}

export default HomeActions
