import React, { useState } from 'react';
import './App.css';
// import "./App.scss"
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import {Switch,Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
// import PortFoliosPage from './Pages/PortFoliosPage';
import ContactPage from './Pages/ContactPage';
import BlogsPage from './Pages/BlogsPage';
import PortFoliosPage from './Pages/PortFoliosPage';
import Preloader from './Pages/Preloader';

function App() {
    const [navToggle,setNavToggle]= useState(false);
    const navClick=()=>{
        setNavToggle(!navToggle)
    }

    return (
        <>
        {Preloader}

        <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle':""}`}>  
            <Navbar/>
        </div>

        <div className="nav-btn" onClick={navClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>





        <div className="main-content">  
            <div className="content">
             <Switch>

                 {/* HAM ESKE LIYE EK COMPONENT KA USE KR SAKTE HAI */}



                    <Route path="/" exact>
                        <HomePage/>
                    </Route>

                    <Route path="/about" exact>
                        <AboutPage/>
                    

                    </Route>

                    <Route path="/portfolios" exact>
                        <PortFoliosPage/>
                    

                    </Route>
                    <Route path="/contact" exact>
                        <ContactPage/>
                    

                    </Route>

                    <Route path="/blogs" exact>
                        <BlogsPage/>
                    

                    </Route>

                      
            </Switch>   


            </div>
        
        </div>
       
        
        
            
        </div>
    </>
    )
}

export default App
