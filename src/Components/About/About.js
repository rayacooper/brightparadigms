import React, {useState} from 'react';

import './About.css'
import Arrow from './../../Assets/Carat_Symbol.png';
import ArrowReverse from './../../Assets/Carat_Symbol_Reverse.png';
import ArrowDown from './../../Assets/Carat_Symbol_Down.png';
import TavaciExterior from './../../Assets/Tavaci_Exterior.jpg';
import TavaciKitchen from './../../Assets/Tavaci_Kitchen.jpg';
import GreenTurtle from './../../Assets/Green_Turtle_Interior.jpg';
import LightingExample from './../../Assets/Greatroom-All-Frames.gif';

const About = () => {

    let [lightingVisible, updateLightingVisible] = useState(false);
    let [shadingVisible, updateShadingVisible] = useState(false);
    let [temperatureVisible, updateTemperatureVisible] = useState(false);

    return(
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

                <div id='whatwedo'>
                    <h1>WHAT WE DO</h1>
                </div>
                

                <div className="AboutClick">
                    <div className={lightingVisible ? "AboutMiniSections" : "AboutHidden"} id='AboutShading'>
                        <h1 id='AbtLight' onClick={() => updateLightingVisible(!lightingVisible)}>
                        <img className='Arrow' src={lightingVisible ? ArrowDown : Arrow} alt='Dropdown'/>
                            Lighting 
                        <img className='Arrow' src={lightingVisible ? ArrowDown : ArrowReverse} alt='Dropdown'/> </h1>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className={shadingVisible ? "AboutMiniSections" : "AboutHidden"} id='AboutShading'>
                        <h1 id='AbtShade' onClick={() => updateShadingVisible(!shadingVisible)}>
                        <img className='Arrow' src={shadingVisible ? ArrowDown : Arrow} alt='Dropdown'/>
                            Shading
                        <img className='Arrow' src={shadingVisible ? ArrowDown : ArrowReverse} alt='Dropdown'/>
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className={temperatureVisible ? "AboutMiniSections" : "AboutHidden"} id='AboutTemperature'>
                        <h1 id='AbtTemp' onClick={() => updateTemperatureVisible(!temperatureVisible)}>
                        <img className='Arrow' src={temperatureVisible ? ArrowDown : Arrow} alt='Dropdown'/>
                            Temperature
                        <img className='Arrow' src={temperatureVisible ? ArrowDown : ArrowReverse} alt='Dropdown'/>
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                </div>

                <div className='AboutDesktop'>

                    <div className="AboutMini">
                        <div className='AboutDesktopImg'>
                            <h2>LIGHTING</h2>
                            <img src={LightingExample} alt='Kitchen Interior'/>
                        </div>
                        <div className='AboutDesktopText'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>

                    <div className="AboutMini">
                        <div className='AboutDesktopText'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        <div className='AboutDesktopImg'>
                            <h2>SHADING</h2>
                            <img src={TavaciKitchen} alt='Living Space'/>
                        </div>
                    </div>

                    <div className="AboutMini">
                        <div className='AboutDesktopImg'>
                            <h2>TEMPERATURE</h2>
                            <img src={TavaciExterior} alt='Outdoor Scene'/>
                        </div>
                        <div className='AboutDesktopText'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default About;