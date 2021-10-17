import React from 'react'
import {Facebook,Twitter,GitHub,Instagram} from "@material-ui/icons"

function Footer() {
    return (
        <div className="last-footer">
            <div className="footer-icon">
                <Facebook className="facebook"/>
                <Twitter className="twitter"/>
                <GitHub className="github"/>
                <Instagram className="instagram"/>

            </div>
            
        </div>
    )
}

export default Footer
