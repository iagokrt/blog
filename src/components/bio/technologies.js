import React from "react"
//  import Image from "gatsby-image"
 
import technologies from '../../state/technologies'
// import from state the Technologies badges with image title and alt properties.
const Technologies = () => {
   return (
        <aside className="tech-badges">
            {technologies.map((tech, index) => (
                <>
                    <div key={index} className="icon-container">
                        <img align="left" title={tech.title} width="40px" src={tech.source} alt={tech.alt} />
                    </div>
                </>
                )
            )}
        </aside>
    )
}
 
export default Technologies
 