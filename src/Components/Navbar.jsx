import React from 'react'
import avatar from '../img/avatar.png';
import sanju2 from '../img/sanju300x300.png'

import {NavLink} from 'react-router-dom'; 

var date = new Date().getFullYear();

// console.log(date)

function Navbar() {
    return (
        <div className="NavBar">
                       
            <nav className="nav">
            <div className="profile">
                <img src={avatar} alt="" />
            </div> 
                <ul className="nav-items">










                    {/* EN LINKS KA EK COMP0NENT BNAAKR USE ACCESS KIYA JA SAKTA USING PROPS */}
                    <li className="nav-item">
                        <NavLink to ="/" exact activeClassName= "active">
                            <p className="HomeLink"> 
                            Home

                            </p>
                        </NavLink>

                    </li>


                    <li className="nav-item">
                        <NavLink to ="/about" exact activeClassName= "active">
                        <p className="AboutLink"> 
                            About

                            </p>
                        </NavLink>

                    </li>


                    <li className="nav-item">
                        <NavLink to ="/portfolios" exact activeClassName= "active">
                            <p className="PortFolioLink">
                                PortFolio
                            </p>
                        </NavLink>

                    </li>


                    <li className="nav-item">
                        <NavLink to ="/Blogs" exact activeClassName= "active">
                            <p className="BlogsLink">
                                Blogs
                            </p>
                        </NavLink>

                    </li>

                    <li className="nav-item">
                        <NavLink to ="/contact" exact activeClassName= "active">
                            <p className="ContactLink">
                                Contact
                            </p>
                        </NavLink>

                    </li>

                    
                
                
                
                


                
                </ul>


                <footer className="footer">
                <p>
                    @{date} 
                </p>
            </footer>
            </nav>
           
        </div>
    )
}

export default Navbar;
