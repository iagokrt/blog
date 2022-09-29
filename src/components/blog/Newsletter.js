import React from "react"
import {AiTwotoneExperiment} from 'react-icons/fa'
import {HiOutlineCollection} from 'react-icons/hi'
const Newsletter = () => {
  return (
    <div className="newsletter-wrapper">
      <div>
        <h2>Blog</h2>
        <p>Welcome! read the latest posts</p>
      </div>
      <div className="section-links article-container" id="article-container">
        <article className="article-ref">
          <a href="/blog" title="Article - computer-graphics" className="article-link">
            <p className="article-ph">Computação gráfica</p>
            <h3 className="">
              <span className="">corel<span className="outline-reverse">draw</span> and vectoring</span>
            </h3>
          </a>
        </article>
        <article className="article-ref">
          <a href="/blog" title="Article - glsl shaders" className="article-link" >
            <p className="article-ph">shaders</p>
            <h3 className="">
              <span className="outline-fill">Coding </span>
              <span className="outline-reverse"> shaders</span> on threejs
            </h3>
          </a>
        </article>
        <article className="article-ref">
          <a href="/blog" title="Article - Arduino" className="article-link" >
            <p className="article-ph">Electronics, Arduino</p>
            <h3 className="">
              <span className="outline-fill">Building Prototypes </span>
              <span className="outline-reverse"> Arduino</span> uno
            </h3>
          </a>
        </article>
      </div>
    </div>
    )
}
 
export default Newsletter
 