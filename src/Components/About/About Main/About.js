import React, {useState} from 'react';

import './About.css'
import Lights from './../../../Assets/lamp-image-dark.jpg'

const About = () => {

    let [forrestVisible, updateForrestVisible] = useState(false);
    let [lightingVisible, updateLightingVisible] = useState(false);
    let [shadingVisible, updateShadingVisible] = useState(false);
    let [temperatureVisible, updateTemperatureVisible] = useState(false);

    return(
        <div className='AboutMain'>

            <div className="AboutBody">
                <div className="AboutSections" id='AboutIntro'>
                    <h1>OUR MISSION</h1>
                    <h3 className="InnerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <br /> <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.</h3>
                    <br />
                </div>

                <h1 id="whatwedo">WHAT<br />WE DO</h1>

                {/* <div className={forrestVisible ? "AboutMiniSections" : "AboutHidden"} id='AboutForrest'>
                    <h1 onClick={() => updateForrestVisible(!forrestVisible)}>Forrest</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div> */}

                <div className="AboutClick">
                    <div className={lightingVisible ? "AboutMiniSections" : "AboutHidden"} id='AboutShading'>
                        <h1 onClick={() => updateLightingVisible(!lightingVisible)}>Lighting</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className={shadingVisible ? "AboutMiniSections" : "AboutHidden"} id='AboutShading'>
                        <h1 onClick={() => updateShadingVisible(!shadingVisible)}>Shading</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className={temperatureVisible ? "AboutMiniSections" : "AboutHidden"} id='AboutTemperature'>
                        <h1 onClick={() => updateTemperatureVisible(!temperatureVisible)}>Temperature</h1>
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
            
        </div>
    )
}

export default About;