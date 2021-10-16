import React from 'react'
import about from '../img/about.png'

import {Button} from "@material-ui/core"
import {ArrowDownwardOutlined} from "@material-ui/icons"

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="img"/>


            </div>
            <div className="about-info">

                <h4 className="head">I am  <span>Web Developer</span></h4>
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
                        <h4>Full Name</h4>
                        <h4>Age</h4>
                        <h4>Nationality</h4>
                        <h4>Langauge</h4>
                        <h4> Address</h4>
                        <h4>Country</h4>

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

                <Button variant="contained" style={{marginTop:"3rem",color:"red",textTransform:"uppercase"}} color="success" size="large" className="materialButton" endIcon={<ArrowDownwardOutlined/>}>Download CV</Button>
                {/* <button className="btn">Download  CV</button> */}
            </div>
          
            
        </div>
    )
}

export default ImageSection;
