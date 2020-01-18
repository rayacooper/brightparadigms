import React from 'react';

import './Contact.css'

const Contact = () => {

    return(
        <div className='ContactMain'>

            <div className="ContactInner">
                <p><b>CONNECT</b></p>
                <br />
                <a href='http://www.youtube.com' target='blank'><p>YOUTUBE</p></a>
                <a href='http://www.facebook.com' target='blank'><p>FACEBOOK</p></a>
                <a href='http://instagram.com' target='blank'><p>INSTAGRAM</p></a>
            </div>

            <div className="ContactInner">
                <p><b>CONTACT</b></p>
                <br />
                <p>801.472.2278</p>
                <a href='mailto: forrestgk@brightparadigms.com' target='blank'><p>FORRESTGK@BRIGHTPARADIGMS.COM</p></a>
                <br />
                <p>1970 NORTH 45 WEST</p>
                <p>OREM UT 84663</p>
                <br />
            </div>

            <p></p>
            
        </div>
    )
}

export default Contact;