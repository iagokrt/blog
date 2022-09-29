import React from "react"
import { Link, graphql } from "gatsby"

// const tooltipText = 'Clique em alguma das opções de leitura abaixo!'

const blogs = [
    {
        title: 'Learning about Lorenz Attractor',
        url: '/blog'
    },
    {
        title: 'Coding With JavaScript',
        url: '/blog'
    },
    {
        title: 'Game Development for 2022',
        url: '/blog'
    },
    {
        title: 'Solving Algorithms with Node.js',
        url: '/blog'
    },
]
// to-do later: Refator this data to state
const webgls = [
    {
        title: 'Learning about Noise Functions',
        url: '/blog'
    },
    {
        title: 'Post-processing',
        url: '/blog'
    },
    {
        title: 'GPU VS CPU',
        url: '/blog'
    },
    {
        title: 'What is the Book of shaders?',
        url: '/blog'
    },
]
const threes = [
    {
        title: 'Learning about Noise Functions',
        url: '/blog'
    },
    {
        title: 'Post-processing',
        url: '/blog'
    },
    {
        title: 'GPU VS CPU',
        url: '/blog'
    },
    {
        title: 'What is the Book of shaders?',
        url: '/blog'
    },
]
const randos = [
    {
        title: 'Nostalgic Old Games',
        url: '/blog'
    },
    {
        title: 'Testing Code with Mocha & Chai',
        url: '/blog'
    },
    {
        title: 'Intro to Prototype Pollution',
        url: '/blog'
    },
    {
        title: 'Nostalgic Old Games',
        url: '/blog'
    },
]

const NewsTicker = () => {
    return (
        <>
            <h5 className="newsticker-title">What's new on Write Island?</h5>
            <div className="news-ticker-container">
                <div className="blog-news">
                    <div className="news">
                        <Link className="outline news-link" to="/blog">Blog</Link>
                        <ul>
                            {blogs.map((post, i) => (
                                <li key={i}>
                                    <a href={post.url}>{post.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="news webgl-news">
                        <Link className="outline-reverse news-link" to="/blog">WebGL</Link>
                        <ul>
                            {webgls.map((post, i) => (
                                <li key={i}>
                                    <a href={post.url}>{post.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="blog-news">
                    <div className="news three-news">
                        <Link className="outline-green news-link" to="/blog">THREE.js</Link>
                        <ul>
                            {threes.map((post, i) => (
                                <li key={i}>
                                    <a href={post.url}>{post.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div> 
                    <div className="news design-news">
                        <Link className="outline-orange news-link" to="/blog">Misc</Link>
                        <ul>
                            {randos.map((post, i) => (
                                <li key={i}>
                                    <a href={post.url}>{post.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div> 
                </div>
            </div>
        </>
    )
}

/**
 *  <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className="news">
                    <span className="outline">Blog</span>
                    <ul>
                        <li><a href="#">Learning about Lorenz Attractor</a></li>
                        <li><a href="#">Coding With THREE.js</a></li>
                        <li><a href="#">Solving Algorithms with Node.js</a></li>
                        <li><a href="#">Game Development for 2022</a></li>
                    </ul>
                </div>
                <div className="news webgl-news">
                    <span className="outline-reverse">WebGL</span>
                    <ul>
                        <li><a href="#">Learning about Noise Functions</a></li>
                        <li><a href="#">Post-processing</a></li>
                        <li><a href="#">GPU VS CPU</a></li>
                        <li><a href="#">What is the Book of shaders?</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="news webgl-news">
                    <span className="outline-reverse">WebGL</span>
                    <ul>
                        <li><a href="#">Learning about Noise Functions</a></li>
                        <li><a href="#">Post-processing</a></li>
                        <li><a href="#">GPU VS CPU</a></li>
                        <li><a href="#">What is the Book of shaders?</a></li>
                    </ul>
                </div> 
            </div>
            <div style={{display: 'flex'}}>
                <div className="news webgl-news">
                    <span className="outline-reverse">WebGL</span>
                    <ul>
                        <li><a href="#">Learning about Noise Functions</a></li>
                        <li><a href="#">Post-processing</a></li>
                        <li><a href="#">GPU VS CPU</a></li>
                        <li><a href="#">What is the Book of shaders?</a></li>
                    </ul>
                </div> 
                <div className="news">
                    <span className="outline-reverse">WebGL</span>
                    <ul>
                        <li><a href="#">Learning about Noise Functions</a></li>
                        <li><a href="#">Post-processing</a></li>
                        <li><a href="#">GPU VS CPU</a></li>
                        <li><a href="#">What is the Book of shaders?</a></li>
                    </ul>
                </div> 
            </div>
        </div>
 * 
 */
export default NewsTicker
