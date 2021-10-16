import React from 'react'
import College from '../Education-components/College';
import Title from '../Components/Title';

const Education = () => {
    return (
        <div className="education-details">
            <Title title={"My Education"}  span={"My Education"}/>
            <College 
            name="RAJA BALWANT SINGH ENGINEERING TECHNICAL CAMPUS,BICHPURI"
            location="Agra, India"
            educationName="B.Tech in Computer science"
            />

            
        </div>
    )
}

export default Education;
