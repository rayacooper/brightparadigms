import React from 'react';

import './WhoWeAre.css'

import ForrestGKelsey from './../../Assets/Forrest_G_Kelsey_Portrait.jpg';

function WhoWeAre(){
    return(
        <div className="WhoMain">
            <div className='WhoInner'>
            <h1>Forrest D Kelsey</h1>
            <h4>Presidend and Chief Technical Officer</h4>
                <div className='WhoRow'>
                <img src={ForrestGKelsey} alt='Forrest D Kelsey'/>
                <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className='WhoInner' id="ForrestG">
                <h1>Forrest G Kelsey</h1>
                <h4>Chief Executive Officer</h4>
                <div className="WhoRow">
                <img src={ForrestGKelsey} alt='Forrest G Kelsey'/>
                <p>Forrest Grant Kelsey is the son of Forrest Dix Kelsey 
                    and has grown up around Vantage products most of his life. 
                    As a teenager he became familiar with the home automation 
                    industry by working as an installer for a small Vantage 
                    Controls dealer. Prior to launching Bright Paradigms, 
                    Forrest Grant worked as a District Manager as well as a 
                    Leadership Development Specialist for Wireless Advocates, 
                    the largest authorized retailer of the four major cell phone 
                    providers. Forrest Grant received his Bachelor’s degree in 
                    Business Management from Utah Valley University and expects 
                    to complete his MBA in August 2020 through Utah State University. </p>
                </div>
                
            </div>
        </div>
    )
}

export default WhoWeAre