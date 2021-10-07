import React from 'react';
import Contactitem from '../Components/Contactitem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/Title';


function ContactPage() {
    return (
        <div>

            <div className="title">
            <Title title ={'My Contact'} span= {'My Contact'}/>


            </div>
            <div className="ContactPage">
            
            <div className="map-sect">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.6188057097224!2d78.08049593229151!3d27.105312887792177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747247c3826245%3A0x9f2b688d8c4d2a6b!2sShyamon%20Rd%2C%20Uttar%20Pradesh%20283125!5e0!3m2!1sen!2sin!4v1633280140807!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="contact-sect">
                <Contactitem icon={phone} text1={"+91 9149077008"} text2={"+91 7088523838"} title={"Phone"}/>
                <Contactitem icon={email} text1={"sanjucom14998@gmail.com"} text2={"sanjucom14998@yahoo.com"} title={"Email"}/>
                <Contactitem icon ={location} text1={"Shyamon, Agra"} text2={"India"} title={"Address"}/>
            </div>
            
            
        </div>

        </div>

      
    )
}

export default ContactPage;
