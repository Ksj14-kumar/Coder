import React from 'react';

function Title(props) {
    var title= props.title
    var span= props.span
    return (
        <div className="Title">
            <h3>
                {title}
            <span>{span}</span>



            </h3>

          

            
        </div>
    )
}

export default Title;
