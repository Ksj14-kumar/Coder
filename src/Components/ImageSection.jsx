import React from 'react'
import about from '../img/about.png'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="img"/>


            </div>
            <div className="about-info">

                <h4>I am  <span>Web Developer</span></h4>
                <p className="about-text">

                Creative web developer dedicated to building and optimizing
                the performance of user-centric, high-impact websites for nationwide,
                F500 and global companies. Leverage technical, analytical and problem-solving
                skills to create dynamic, high-speed websites, apps and platforms fueling competitive
                advantage and revenue growth.
                </p>
                <div className="about-details">

                    {/* HAM ESE COMPONENT KE ANDAR DAAL SAKTE HAI */}
                    
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Langauge</p>
                        <p> Address</p>
                        <p>Country</p>

                    </div>
                    <div className="right-section">
                        <p>: Sanju Kumar</p>
                        <p>: 20</p>
                        <p>: India</p>
                        <p>: English, Hindi</p>
                        <p>: Agra, india</p>
                        <p>: India</p>


                    </div>
                    


                </div>

                <button className="btn">Download  CV</button>
            </div>
          
            
        </div>
    )
}

export default ImageSection;
