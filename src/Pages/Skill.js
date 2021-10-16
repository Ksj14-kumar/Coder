import React from 'react'
import Title from '../Components/Title';
import Skills from '../Education-components/Skills';

import html from '../img/skill images/html56.jpg'
import react from '../img/skill images/react js_logo_react_react native_icon.svg'
import haml from  '../img/skill images/haml.png'
import css from '../img/skill images/css/css4.jpg'
import boot from '../img/skill images/css/boot.jpg'
import material from '../img/skill images/css/material1.jpg'
import sass from '../img/skill images/css/sass1.jpg'
import tail from '../img/skill images/css/tail.jpg'
import js from '../img/skill images/js/js1.png'
// import react1 from '../img/skill images/js/react js.png'
import express from '../img/skill images/js/express1.jpg'
import node from '../img/skill images/js/node1.png'
import next from '../img/skill images/js/docker1.png'
import mysql from '../img/skill images/backend/mysql1.jpg'
import mongo from '../img/skill images/backend/mongo.png'
import socket from '../img/skill images/backend/socket.jpg'

import webpack from '../img/skill images/tools/web123.jpg'
import gulp from '../img/skill images/tools/remove (2).jpg'
import vs from '../img/skill images/editors/vs.jpg'
import pycharm from '../img/skill images/editors/pycharm.png'
import git from '../img/skill images/editors/gitbash1.png'
import github from '../img/skill images/others/github.jpg'
import stack from "../img/skill images/others/stack.jpg"
function Skill() {
    return (
        <div className="skills">
            <Title title={"My Skills"}  span={"My Skills"}/>
            <Skills
            name="HTML"
            img1={html}
            img2={react}
            img3={haml}
            
            />

            <Skills
            name="CSS"
            img1={css}
            img2={sass}
            img3={boot}
            img4={material}
            img5={tail}  
            />        

            <Skills
            name="JavaScript"
            img1={js}
            img2={react}
            img3={express}
            img4={node}
            img5={next}
            />

            <Skills
            name="Back-End"
            img1={mysql}
            img2={mongo}
            img3={express}
            img4={node}
            img5={socket}

            />

            <Skills 
            name="Build-Tools"
            img1={gulp}
            img2={webpack}
            />


            <Skills
            name="Editors-Tools"
            img1={vs}
            img2={pycharm}
            img3={git}
            />

            <Skills 
            name="Other"
            img1= {github}
            img2={stack}
            />
        

            </div>
    )
}

export default Skill;
