import React from "react"
//  import Image from "gatsby-image"
 
import contact from '../../state/contact'
// import from state the Contact badges with image title and alt properties.
const Contact = () => {
    return (
        <div className="contact-badge">
            <h2>
                <span role="img" aria-label="mailbox emoji">📫</span> Contact Info
            </h2>
            
            <div className="contact-badges">
                {contact.map((item, index) => (
                        <div key={index}>
                            <a className="contact-badge-link" href={item.link} target="_blank" rel="noreferrer">
                                <img title={item.title} src={item.source} alt={item.alt} />
                            </a>
                        </div>
                    )
                )}
            </div>
            
            <h2>Yes I <span className="outline">see</span> you</h2>
        </div>
    )
}

export default Contact
