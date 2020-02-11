import React from 'react';

import './Contact.css'

const Contact = () => {

    return(
        <div className='ContactMain'>

            <div className="ContactInner">
                <p><b>CONNECT</b></p>
                <br />
                <a href='https://www.facebook.com/brightparadigms/?modal=admin_todo_tour' target='blank'><p>FACEBOOK</p></a>
            </div>

            <div className="ContactInner">
                <p><b>CONTACT</b></p>
                <br />
                Forrest G Kelsey
                <p>801.472.2278</p>
                <a href='mailto: forrestgk@brightparadigms.com' target='blank'><p>FORRESTGK@BRIGHTPARADIGMS.COM</p></a>
                <br />
            </div>

            <p></p>
            
        </div>
    )
}

export default Contact;