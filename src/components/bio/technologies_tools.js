import React from "react"
//  import Image from "gatsby-image"
 
import technologies_tools from '../../state/technologies_tools'
// import from state the Technologies badges with image title and alt properties.
const TechnologiesTools = () => {
   return (
        <aside className="tech-badges-tools">
            {technologies_tools.map((tech, index) => (
                <>
                    <div key={index} className="icon-container">
                        <img align="center" title={tech.title} width="40px" src={tech.source} alt={tech.alt} />
                    </div>
                </>
                )
            )}
        </aside>
    )
}
 
export default TechnologiesTools
 