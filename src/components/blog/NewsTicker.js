import React from "react"
 
const NewsTicker = () => {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div class="news">
                    <span className="outline">Blog</span>
                    <ul>
                        <li><a href="#">Learning about Lorenz Attractor</a></li>
                        <li><a href="#">Coding With THREE.js</a></li>
                        <li><a href="#">Solving Algorithms with Node.js</a></li>
                        <li><a href="#">Game Development for 2022</a></li>
                    </ul>
                </div>
                <div class="news webgl-news">
                    <span className="outline-reverse">WebGL</span>
                    <ul>
                        <li><a href="#">Learning about Lorenz Attractor</a></li>
                        <li><a href="#">Shader Particles and Post-processing</a></li>
                        <li><a href="#">Noise Functions</a></li>
                        <li><a href="#">What is the Book of shaders?</a></li>
                    </ul>
                </div>
            </div>
    </div>
    )
}

export default NewsTicker
