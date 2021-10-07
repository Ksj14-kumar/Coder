import React from 'react';
import Title from '../Components/Title';
// import ImageSection from './ImageSection';
import ImageSection from '../Components/ImageSection';
import SkillSections from '../Components/SkillSections';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
import {FaJs} from "react-icons/fa"
function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title ={'About Me'} span= {'About Me'}/>
            <ImageSection/>
            <Title title ={'My Skills'} span= {'My Skills'}/>
            <div className="skils-content">
            <SkillSections skill={"JavaScript"} progress={"90%"} width={"90%"} id={"JavaScript"} jsIcon={FaJs}/>
            <SkillSections skill={"Express js"} progress={"95%"} width={"95%"} id={"Express"}/>
            <SkillSections skill={"Node js"} progress={"90%"} width={"90%"} id={"Node"}/>
            <SkillSections skill={"React js"} progress={"75%"} width={"75%"} id={"React"}/>
            <SkillSections skill={"Next js"} progress={"80%"} width={"80%"} id={"Next"} />
            <SkillSections skill={"leaflet js"} progress={"60%"} width={"60%"} id={"Leaflet"}/>
            <SkillSections skill={"JQuery"} progress={"92%"} width={"92%"} id={"jquery"}/>
            <SkillSections skill={"Tailwind CSS"} progress={"75%"} width={"86%"} id={"Tailwind"}/>
            <SkillSections skill={"Bootstrap"} progress={"90%"} width={"90%"} id={"Bootstrap"}/>
            <SkillSections skill={"SASS"} progress={"96%"} width={"96%"} id={"Sass"}/>
            <SkillSections skill={"HTML 5"} progress={"99%"} width={"99%"} id={"Html"}/>
            <SkillSections skill={"CSS3"} progress={"98%"} width={"98%"} id={"Css"}/>
            <SkillSections skill={"Python"} progress={"98%"} width={"98%"} id={"Python"}/>
            <SkillSections skill={"Python Flask"} progress={"83%"} width={"83%"} id={"Flask"}/>


            </div>

            <Title title ={'My Services'} span= {'My Services'}/>

            <div className="services-container">
                <ServicesSection image={design} title={"Web Design"} text={'My Designing work on Figma, Adobe Illustration, PhotoShop,Corel Draw'}/>
                <ServicesSection image={gamedev} title={"Game Dev"} text={'My Game Development skill work on Pygame, BabylonJS'}/>
                <ServicesSection image={intelligence} title={"Intelligence"} text={'My Intelligence work on Mathmatics, Data Structure and Algorithm'}/>

            </div>

            
            
        </div>
    )
}

export default AboutPage;
