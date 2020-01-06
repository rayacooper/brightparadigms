import React from 'react';

import './Contact.css'

const Contact = () => {
    return(
        <div className='ContactMain'>

            <div className="ContactInner">
                <p><b>CONNECT</b></p>
                <br />
                <a href='#' target='blank'><p>YOUTUBE</p></a>
                <a href='#' target='blank'><p>FACEBOOK</p></a>
                <a href='#' target='blank'><p>INSTAGRAM</p></a>
                {/* <p>TWITTER</p>  */}
            </div>

            <div className="ContactInner">
                <p><b>CONTACT</b></p>
                <br />
                <p>1970 NORTH 45 WEST</p>
                <p>OREM UT 84663</p>
                <br />
                <p>000 000 0000</p>
                <a href='mailto: workingemail@brightparadigms.com' target='blank'><p>WORKINGEMAIL@BRIGHTPARADIGMS.COM</p></a>
                <br />
            </div>

            <p></p>
            
        </div>
    )
}

export default Contact;