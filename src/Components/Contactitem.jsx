import React from 'react';
import Title from '../Components/Title';

function Contactitem(props) {
    return (
           
            <div className="ContactItem">
                    <div className="contact">
                        <img src={props.icon} alt=""/>
                        
                        <div className="right-items">
                            <h6>{props.title}</h6>
                            <p>{props.text1}</p>
                            <p>{props.text2}</p>
                        </div>

                    </div>
            
            </div>
        
    )
}

export default Contactitem
