import React from 'react'
import avatar from '../img/avatar.png';
import sanju2 from '../img/sanju300x300.png'

import { NavLink } from 'react-router-dom';
// import SideBarIcons from './SideBarIcons';
import {Home,ContactMail,Person} from "@material-ui/icons"
import {FaProjectDiagram,FaPen} from 'react-icons/fa'
import {MdSchool,MdSort} from "react-icons/md"
import {FaFile,FaFileAlt,FaFileDownload} from "react-icons/fa"
import Footer from '../Pages/Footer';


var date = new Date().getFullYear();

// console.log(date)

function Navbar() {
    return (
        <div className="NavBar">

            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="img" />
                </div>
                <ul className="nav-items">










                    {/* EN LINKS KA EK COMP0NENT BNAAKR USE ACCESS KIYA JA SAKTA USING PROPS */}
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            <p className="HomeLink">
                               <span>
                               <Home/>
                                   </span> 

                                Home

                            </p>
                        </NavLink>

                    </li>


                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            <p className="AboutLink">
                                <span>
                                    <Person/>
                                </span>
                                About

                            </p>
                        </NavLink>

                    </li>


                    {/* <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            <p className="PortFolioLink">
                                <span className="portIcon">
                            <FaProjectDiagram/>


                                </span>
                                <span className="port">

                                PortFolio
                                </span>
                            </p>
                        </NavLink>

                    </li> */}


                    {/* <li className="nav-item">
                        <NavLink to="/Blogs" exact activeClassName="active">
                            <p className="BlogsLink">
                                <span>
                                    <FaPen/>

                                </span>
                                Blogs
                            </p>
                        </NavLink>

                    </li> */}

                   

                    <li className="nav-item">
                        <NavLink to="/education" exact activeClassName="active">
                            <p className="EducationLink">
                                <span>
                                <MdSchool/>

                                </span>
                                Education
                            </p>
                        </NavLink>

                    </li>

                    <li className="nav-item">
                        <NavLink to="/skill" exact activeClassName="active">
                            <p className="SkillLink">
                                <span>
                                    <MdSort/>
                                </span>
                            Skills
                            </p>
                        </NavLink>

                    </li>
                    <li className="nav-item">
                        <NavLink to="../Files/SANJU's Resume.pdf" target="_blank" exact activeClassName="active" download>
                            <p className="Resume">
                                <span>
                                    <FaFileDownload/>
                                </span>
                            Resume
                            </p>
                        </NavLink>

                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            <p className="ContactLink">
                                <span>
                                    <ContactMail/>
                                </span>
                                Contact
                            </p>
                        </NavLink>

                    </li>









                </ul>


                <footer className="footer">
                    <p>
                        &copy; {date} All Right  Reserved
                    <Footer/>
                    </p>

                </footer>
            </nav>


        </div>
    )
}

export default Navbar;
