import React from 'react'
import Title from '../Components/Title';
import Skills from '../Education-components/Skills';

import html from '../img/skill images/html/HTML5_Badge_512-removebg-preview.jpg'
import react from '../img/skill images/html/eact js_logo_react_react native_icon-removebg-preview.jpg'
import haml from  '../img/skill images/html/haml-removebg-preview.jpg'
import css from '../img/skill images/black bg/cs/css4-removebg-preview.jpg'
import boot from '../img/skill images/black bg/cs/boot-removebg-preview.jpg'
import material from '../img/skill images/black bg/cs/material1-removebg-preview.jpg'
import sass from '../img/skill images/black bg/cs/sass-removebg-preview.jpg'
import tail from '../img/skill images/black bg/cs/tail-removebg-preview (1).jpg'
import js from '../img/skill images/js/js1.png'
// import react1 from '../img/skill images/js/react js.png'
import express from '../img/skill images/black bg/express1-removebg-preview.jpg'
import node from '../img/skill images/black bg/node1-removebg-preview.jpg'
import next from '../img/skill images/black bg/docker1-removebg-preview.jpg'
import mysql from '../img/skill images/black bg/back end/mysql1-removebg-preview.jpg'
import mongo from '../img/skill images/black bg/back end/mongo-removebg-preview.jpg'
import socket from '../img/skill images/black bg/back end/socket-removebg-preview.jpg'

import webpack from '../img/skill images/black bg/Tools/web12-removebg-preview.jpg'
import gulp from '../img/skill images/black bg/Tools/remove (2)-removebg-preview.jpg'
import vs from '../img/skill images/black bg/editor/vs-removebg-preview.jpg'
import pycharm from '../img/skill images/black bg/editor/pycharm-removebg-preview.jpg'
import git from '../img/skill images/editors/gitbash1.png'
import kali from '../img/skill images/black bg/ka-removebg-preview (1).jpg'
import github from '../img/skill images/black bg/Other/github-removebg-preview (1).jpg'
import stack from "../img/skill images/black bg/Other/stack-removebg-preview.jpg"
import pug from '../img/skill images/html/pug-removebg-preview.jpg'
import jeklyn from '../img/skill images/black bg/html/jeklly-removebg-preview.jpg'
import vim from '../img/skill images/black bg/html/vim-removebg-preview (1).jpg'
import docker from '../img/skill images/black bg/Tools/docker-removebg-preview.jpg'
import huroku from '../img/skill images/black bg/html/huroku-removebg-preview.jpg'
import code from "../img/skill images/black bg/html/codesand-removebg-preview.jpg"
import medium from '../img/skill images/black bg/html/medium12-removebg-preview.jpg'
import ps from '../img/skill images/black bg/html/Adobe-Photoshop-Logo-removebg-preview.jpg'

function Skill() {
    return (
        <div className="skills">
            <Title title={"My Skills"}  span={"My Skills"}/>
            <Skills
            name="HTML"
            img1={html}
            img2={react}
            img3={haml}
            img4={pug}
            img5={jeklyn}
            
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
            img3={docker}
            img4={ps}
            
            />


            <Skills
            name="Editors-Tools"
            img1={vs}
            img2={pycharm}
            img3={git}
            img4={kali}
            img4={vim}
            />

            <Skills 
            name="Other"
            img1= {github}
            img2={stack}
            img3={code}
            img4={medium}
            img5={huroku}
            />
        

            </div>
    )
}

export default Skill;
