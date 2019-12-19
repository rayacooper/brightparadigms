import React, {useState} from 'react';

import './About.css'
import Lights from './../../../Assets/lamp-image.jpg'

const About = () => {

    let [forrestVisible, updateForrestVisible] = useState(false)

    return(
        <div className='AboutMain'>

            {/* <div className='AboutNavBar'>
                <h5>Forrest</h5>
                <h5>Lighting</h5>
                <h5>Shading</h5>
                <h5>Temperature</h5>
            </div> */}

            <div className="AboutBody">

                <div className="AboutSections" id='AboutIntro'>
                    <h1>Welcome</h1>
                    <h3>Bright Paradigms will make your home experience a dream come true. </h3>
                </div>

                <img src={Lights} />

                <div className={forrestVisible ? "AboutMiniSections" : "AboutHidden"} id='AboutForrest'>
                    <h1 onClick={() => updateForrestVisible(!forrestVisible)}>Forrest</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

                <div className="AboutMiniSections" id='AboutShading'>
                    <h1>Lighting</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="AboutMiniSections" id='AboutShading'>
                    <h1>Shading</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="AboutMiniSections" id='AboutTemperature'>
                    <h1>Temperature</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

            </div>

            
        </div>
    )
}

export default About;