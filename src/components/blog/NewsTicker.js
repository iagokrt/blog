import React from "react"

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
            <h5 style={{color: 'sienna', textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>What's new on Write Island?
            </h5>
            <div className="news-ticker-container">
                <div className="blog-news">
                    <div className="news">
                        <span className="outline">Blog</span>
                        <ul>
                            {blogs.map((post, i) => (
                                <li key={i}>
                                    <a href={post.url}>{post.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="news webgl-news">
                        <span className="outline-reverse">WebGL</span>
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
                        <span className="outline-green">THREE.js</span>
                        <ul>
                            {threes.map((post, i) => (
                                <li key={i}>
                                    <a href={post.url}>{post.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div> 
                    <div className="news design-news">
                        <span className="outline-orange">Misc</span>
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
