import React from "react"
import {AiTwotoneExperiment} from 'react-icons/fa'
import {HiOutlineCollection} from 'react-icons/hi'
const Newsletter = () => {
  return (
     <>
      <div className="section-links article-container" id="article-container">
        <article className="article-ref">
          <a href="/labs" title="Article - computer-graphics" className="article-link">
            <p className="article-ph">Computação gráfica</p>
            <h3 className="">
              <span className="">corel<span className="outline-reverse">draw</span> and vectoring</span>
            </h3>
          </a>
        </article>
        <article className="">
          <a href="/labs" title="Article - glsl shaders" className="article-link" >
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
 