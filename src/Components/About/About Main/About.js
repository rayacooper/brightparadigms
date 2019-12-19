import React from 'react';

import './About.css'
// import Lights from './../../../Assets/lamp-image.jpg'

const About = () => {
    return(
        <div className='AboutMain'>

            <div className='AboutNavBar'>
                <h5>Forrest</h5>
                <h5>Lighting</h5>
                <h5>Shading</h5>
                <h5>Temperature</h5>
            </div>

            <div className="AboutForrest">
                <h2>Oh hey what's up</h2>
                <p>Lorom ipsum dolor est</p>
            </div>
        </div>
    )
}

export default About;