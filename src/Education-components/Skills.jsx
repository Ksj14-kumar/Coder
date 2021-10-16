import React from 'react'

function Skills(props) {
    return (
        <div className="inner-container">
            
        <div className="skill-name" >
            <h2>
                {props.name}
            </h2>
        </div>
        <hr />
        <div className="different-skills">
            <div className="div1 div">

            <img src={props.img1} alt=""/>
            </div>

            <div className="div2 div">

            <img src={props.img2} alt=""/>
            </div>
            
            <div className="div3 div">

            <img src={props.img3} alt=""/>
            </div>
            
            <div className="div4 div">

            <img src={props.img4} alt=""/>
            </div>
            <div className="div5 div">

            <img src={props.img5} alt=""/>
            </div>
           
           
            



            
        </div>


    </div>

     
    )
}

export default Skills
