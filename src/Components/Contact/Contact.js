import React from 'react';

import './Contact.css'

import FacebookLogo from './../../Assets/Facebook-Logo-White.png';

const Contact = () => {

    return(
        <div className='ContactMain'>

            <div className="ContactInner">
                <p><b>CONNECT</b></p>
                <a href='https://www.facebook.com/brightparadigms/?modal=admin_todo_tour' target='blank'>
                    <img id='FBLogo' src={FacebookLogo}/></a>
            </div>

            <div className="ContactInner">
                <p><b>CONTACT</b></p>
                <p>Forrest G Kelsey</p>
                <p>801.472.2278</p>
                <a href='mailto: forrestgk@brightparadigms.com' target='blank'><p>FORRESTGK@BRIGHTPARADIGMS.COM</p></a>
                <br />
            </div>

            <p></p>
            
        </div>
    )
}

export default Contact;