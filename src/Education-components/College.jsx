import React from 'react'
import {NavLink} from 'react-router-dom';

const rbswebsite= "https://fetrbs.org/"

function College(props) {
    return (
        
        <div className="inner-info card">
            <div className="card-header">
                <p className="college-name">
                    <NavLink to={rbswebsite}>
                        {props.name}
                      

                    </NavLink>
                </p>

                    <p>
                        {props.location}
                    </p>


            </div>
            <div className="card-body">
            <ul>
                <li>
                    {props.educationName}
                </li>
            </ul>

            </div>
            

        </div>
        

    
    )
}

export default College
