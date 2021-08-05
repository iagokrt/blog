import React, {useRef, useState, useEffect} from "react"
import { Link, graphql } from "gatsby"

import Navigation from '../components/blog/Navigation'
import Layout from "../components/layout"
import SEO from "../components/seo"
import projects from '../state/projects'

import useWindowSize from '../hooks/useWindowSize'

const Works = () => {

  const size = useWindowSize()

  const wrapperRef = useRef()
  const scrollContainer = useRef()

  // Configs
  const skewdata = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);


  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  }, [])

  /** skew effect */
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    skewdata.current = window.scrollY;
    // Set Previous to the scroll previous position
    skewdata.previous += (skewdata.current - skewdata.previous) * skewdata.ease;
    // Set rounded to
    skewdata.rounded = Math.round(skewdata.previous * 100) / 100;

    // Difference between
    const difference = skewdata.current - skewdata.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 35.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${skewdata.rounded}px, 0) skewY(${skew}deg)`;
    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
    <Navigation />
      <article ref={wrapperRef} className="scroll-container">
        <aside ref={scrollContainer} id="scroller" className="scroll">
              {projects.map((project, index) => (
                <>
                  <div key={index}>
                    <div className="img-container scroll-skew-img-container">
                      <img src={project.image} alt={`Project ${index}`} />
                    </div>
                    <h2 className="project-info">
                        {project.title} <span className="outline">{project.subtitle}</span>
                    </h2>
                    <h4 className="project-description">
                        {project.description}
                    </h4>
                  </div>
                </>
              )
          )}
        </aside>
      </article>
    </>
  )
}

export default Works
