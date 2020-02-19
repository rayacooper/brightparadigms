import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import './WhoWeAre.css'

import ForrestGKelsey from './../../Assets/Forrest_G_Kelsey_Portrait.jpg';
import ForrestDKelsey from './../../Assets/Forrest_D_Kelsey_Portrait.jpg';

function WhoWeAre(){
    return(
        <div className="WhoMain">
            <div className='WhoInner'>
            <h1>Forrest D Kelsey</h1>
            <h4>President and Chief Technical Officer</h4>
                <div className='WhoRow'>
                <img src={ForrestDKelsey} alt='Forrest D Kelsey'/>
                <p>Forrest Dix Kelsey has over 30 years of combined 
                    engineering experience in Residential, Commercial, 
                    Industrial, and Defense industries. During his 
                    transition into lighting control, he spent seven 
                    years building his own company to became the 
                    largest Vantage dealer in Utah and third largest 
                    in the U.S. 
                    <br />
                    From there he went on to become the 
                    Director of Technical Services for Vantage Controls 
                    overseeing technical support; design services; 
                    training; and LED Compatibility testing. 
                    During this time he became the foremost authority 
                    on LED dimming and has presented on the subject at 
                    CEDIA. 
                    <br />
                    After ten years, an opportunity for learning 
                    and growth lead Forrest to the company’s commercial 
                    division (Wattsopper) where he has served as the 
                    Director of Field Service Quality overseeing field techs; 
                    tech support; and application engineers. He has built 
                    a reputation as the authority for all Vantage Controls 
                    Products and has trained hundreds of Vantage Controls 
                    technicians. Forrest received his Bachelor’s degree 
                    and Master’s degree in Electrical Engineering from 
                    Brigham Young University.</p>
                </div>
                <Link to='/whoweare/videos'><p>See Forrest's Videos</p></Link>
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

export default withRouter(WhoWeAre) 