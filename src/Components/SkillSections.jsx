import React from 'react'

function SkillSections(props) {
    var width = props.width
    return (
        <div className="SkillSection">
          <div className="skills-container">
                    <h5 className="skill-title">{props.skill} {props.jsIcon}</h5>
                    <div className="skill-bar">
                        <p className="skill-text">{props.progress} </p>
                        <div className="skill-progress">
                            <div className="progress">
                                <div className="inner-progress" style={{width:width}} id={props.id}></div>
                            </div>
                        </div>
                    </div>
              
        </div>  
        </div>
    )
}

export default SkillSections;
