import React from 'react'
import styled from 'styled-components'

function Header() {
    return(
        <>
        <HeaderNavigation>
            <Circle className="circle1 circle"></Circle>
            <Circle className="circle2 circle"></Circle>
            <Circle className="circle3 circle"></Circle>
            <Circle className="circle4 circle"></Circle>
            <Circle className="circle5 circle"></Circle>
            <Circle className="circle6 circle"></Circle>

            </HeaderNavigation>
           
        </>
    )
}
export default Header;


const HeaderNavigation = styled.div`
width:100%;
height:2rem;
// background-color:red;
// border:1px solid blue;
margin-top:-5rem;
// position:absolute;
display:flex;
justify-content:center;
align-items:center;
@media (max-width:353px){
    background-color:red
    display:flex;
    justify-content:flex-start;
}




`


const Circle = styled.div`
width:15px;
height:15px;
// border:1px solid red;
// background-color:green;
border-radius:15px
`