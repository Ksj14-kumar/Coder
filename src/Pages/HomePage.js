import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import Header from '../Components/Header'
function HomePage() {
    return (
        <>

        <div className="HomePage">

            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 


                    <span style={{"marginLeft":"1rem"}}>
                    Sanju Kumar
                        

                        
                    </span>



                </h1>

                <p className="h-sub-text">
                I am Full Stack Web Developer with some experience in designing
                        and developing user interfaces, testing, debuging.



                </p>

            <div className="icons">
                    
                {/* THIS ICON KO HAM EK COMPONENT MAI DAALKAR AR CHHOTA KR SAKTE HAI */}



                        <Link className="icon-holder">
                    <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                        </Link>

                        <Link className="icon-holder">
                    <FontAwesomeIcon icon={faGithub} className="icon gh" />
                        </Link>

                        <Link className="icon-holder">
                    <FontAwesomeIcon icon={faYoutube}  className="icon yt"/>
                        </Link>
                    



            </div>
                
        







            </header>
        
            
        </div>
        </>
    )
}

export default HomePage
