import React from 'react'

function ServicesSection(props) {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <img src={props.image} alt="img" />
                    <h2 className="s-title">{props.title}</h2>
                    <p className="s-text">
                        {props.text}
                        
                         
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default ServicesSection;
