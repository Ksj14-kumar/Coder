import React from 'react'

function MenuItems(props) {

    return (
        <div className="portfolis">
            {
                props.menuItem.map((item)=>{
                    return (
                        <div className="portfolio" key= {item.id}>
                            <div className="image-data">
                                <img src={item.image} alt="img"/>
                                <ul className="hover-items">
                                    <li>
                                        <a href={item.link1}>{item.icon1}</a>
                                        <a href={item.link2}>{item.icon2}</a>
                                    </li>
                                </ul>

                            </div>
                            <h5>
                                {item.title}
                            </h5>
                            <p> plaholder patagraph</p>

                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default MenuItems;
