import React, {useState} from 'react';

import './About.css'
import Arrow from './../../Assets/Carat_Symbol.png';
import ArrowReverse from './../../Assets/Carat_Symbol_Reverse.png';
import ArrowDown from './../../Assets/Carat_Symbol_Down.png';
import Thermostat from './../../Assets/Model_8600.JPG'
import ShadingVid from './../../Assets/Short_shades_demo_clip.mp4';
import LightingExample from './../../Assets/Greatroom-All-Frames.gif';

const About = () => {

    let [lightingVisible, updateLightingVisible] = useState(false);
    let [shadingVisible, updateShadingVisible] = useState(false);
    let [temperatureVisible, updateTemperatureVisible] = useState(false);

    return(
            <div className="AboutBody">
                <div className="AboutSections" id='AboutIntro'>
                    <h3 className="InnerText">Our mission is to improve the health 
                    and comfort of our clients by perfectly delivering clear, 
                    individualized, automation solutions.<br /><br /> We offer high-end products 
                    and programming that give you control when you want it and simplicity 
                    when you need it.<br /><br /> We work with both commercial and residential 
                    properties and are able to service retrofits as well as new builds.
                    <br /> <br />
                    </h3>
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
                        
                        <p>For some, lighting control is an exciting opportunity for power and customization. 
                            For others, it’s a beautiful necessity that offers elegant simplicity.
                            <br /><br /> As a premier 
                            Vantage Controls dealer we are committed to using the very best in technology in 
                            order to find your perfect solution for your home or business no matter what lighting 
                            control means to you. <br /><br />We are experts at Human Centric Lighting which delivers high 
                            quality, natural tunable light, making any space more visually comfortable. </p>
                    </div>

                    <div className={shadingVisible ? "AboutMiniSections" : "AboutHidden"} id='AboutShading'>
                        <h1 id='AbtShade' onClick={() => updateShadingVisible(!shadingVisible)}>
                        <img className='Arrow' src={shadingVisible ? ArrowDown : Arrow} alt='Dropdown'/>
                            Shading
                        <img className='Arrow' src={shadingVisible ? ArrowDown : ArrowReverse} alt='Dropdown'/>
                        </h1>
                        <p>Recent studies have shown that natural light has proven to improve productivity and 
                            emotional health. However, direct light can cause fading, glare, and overheating.
                            <br /> <br /> 
                            In some situations, privacy may be a higher concern and will take priority in the 
                            way your system adjusts your shades. By integrating smart shades into your system, 
                            you get to decide how and when you use natural light.
                            <br /><br/> Your system will be customized 
                            to allow for optimized indirect natural light which increases health, reduces 
                            electricity costs, and protects your home. </p>
                    </div>

                    <div className={temperatureVisible ? "AboutMiniSections" : "AboutHidden"} id='AboutTemperature'>
                        <h1 id='AbtTemp' onClick={() => updateTemperatureVisible(!temperatureVisible)}>
                        <img className='Arrow' src={temperatureVisible ? ArrowDown : Arrow} alt='Dropdown'/>
                            Comfort Control
                        <img className='Arrow' src={temperatureVisible ? ArrowDown : ArrowReverse} alt='Dropdown'/>
                        </h1>
                        <p>In a typical single family home, heating and cooling make up 42% of the annual energy bill. 
                            What if you could significantly reduce this amount without compromising comfort while never 
                            having to touch your thermostat? 
                            <br /><br />By integrating your home’s HVAC into a centrally controlled 
                            system, we can have your home make adjustments intelligently based on room occupancy and 
                            time of day. 
                            <br /><br />When integrated with smart shades, your home’s comfort level can be maintained 
                            naturally and supplemented with HVAC systems when needed.</p>
                    </div>

                </div>

                <div className='AboutDesktop'>

                    <div className="AboutMini">
                        <div className='AboutDesktopImg'>
                            <h2>LIGHTING</h2>
                            <img src={LightingExample} alt='Kitchen Interior'/>
                        </div>
                        <div className='AboutDesktopText'>
                            <p>For some, lighting control is an exciting opportunity for power and customization. 
                            For others, it’s a beautiful necessity that offers elegant simplicity.
                            <br /><br /> As a premier 
                            Vantage Controls dealer we are committed to using the very best in technology in 
                            order to find your perfect solution for your home or business no matter what lighting 
                            control means to you. <br /><br />We are experts at Human Centric Lighting which delivers high 
                            quality, natural tunable light, making any space more visually comfortable. </p>
                        </div>
                    </div>

                    <div className="AboutMini">
                        <div className='AboutDesktopText'>
                        <p>Recent studies have shown that natural light has proven to improve productivity and 
                            emotional health. However, direct light can cause fading, glare, and overheating.
                            <br /> <br /> 
                            In some situations, privacy may be a higher concern and will take priority in the 
                            way your system adjusts your shades. By integrating smart shades into your system, 
                            you get to decide how and when you use natural light.
                            <br /><br/> Your system will be customized 
                            to allow for optimized indirect natural light which increases health, reduces 
                            electricity costs, and protects your home.</p>
                        </div>
                        <div className='AboutDesktopImg'>
                            <h2>SHADING</h2>
                            <video id='Shades' autoplay='autoplay' loop='loop'>
                                <source src={ShadingVid} type="video/mp4" />>
                                {/* <source src={'#'} type="video/ogg" />> */}
                            </video>
                        </div>
                    </div>

                    <div className="AboutMini">
                        <div className='AboutDesktopImg'>
                            <h2>COMFORT CONTROL</h2>
                            <img src={Thermostat} alt='Outdoor Scene'/>
                        </div>
                        <div className='AboutDesktopText'>
                        <p>In a typical single family home, heating and cooling make up 42% of the annual energy bill. 
                            What if you could significantly reduce this amount without compromising comfort while never 
                            having to touch your thermostat? 
                            <br /><br />By integrating your home’s HVAC into a centrally controlled 
                            system, we can have your home make adjustments intelligently based on room occupancy and 
                            time of day. 
                            <br /><br />When integrated with smart shades, your home’s comfort level can be maintained 
                            naturally and supplemented with HVAC systems when needed.</p>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default About;