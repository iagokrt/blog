import React from "react"
import {AiTwotoneExperiment} from 'react-icons/ai'
import {HiOutlineCollection} from 'react-icons/hi'
const Newsletter = () => {
  return (
     <>
      <div className="section-links article-container" id="article-container">
      <div className="article-container-title intro">
        <h2>
          <span className="outline">New </span>Content Available
        </h2>
        <ul className="content-links">
          <li><a href="/blog" className="content-links-link">Navigate to Blog</a></li>
          <li><a href="/works" className="content-links-link"><HiOutlineCollection color='blue' siz={43} />Navigate to Projects</a></li>
          <li><a href="/labs" className="content-links-link"><AiTwotoneExperiment color='red' size={43} />Navigate to WebGL experiments</a></li>
        </ul>
      </div>
        <article className="article-ref">
          <a href="#notYet" title="Article - computer-graphics" className="article-link">
            <p className="article-ph">Computação gráfica</p>
            <h3 className="">
              <span className="">corel<span className="outline-reverse">draw</span> and vectoring</span>
            </h3>
          </a>
        </article>
        <article className="">
          <a href="#" title="Article - glsl shaders" className="article-link" >
            <p className="article-ph">shaders</p>
            <h3 className="">
              <span className="outline-fill">Coding </span>
              <span className="outline-reverse"> shaders</span> on threejs
            </h3>
          </a>
        </article>
      </div>
    </>
    )
}
 
export default Newsletter
 