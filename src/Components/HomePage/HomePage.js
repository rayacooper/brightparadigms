import React from 'react';

import './HomePage.css'

// import House from './../../Assets/Main-House.jpg';
import HouseLogo from './../../Assets/Main-House.jpg';
import TavaciExterior from './../../Assets/Tavaci_Exterior.jpg';
import TavaciKitchen from './../../Assets/Tavaci_Kitchen.jpg';
import GreenInterior from './../../Assets/Green_Turtle_Interior.jpg';

const HomePage = () => {
    return(
        <div className="HomePageMain">
            <img src={HouseLogo} alt='Home Photography'/>
            <div className="HomePageStories">
                <div className='HomePageStory'>
                    <img src={TavaciExterior} alt='Exterior'/>
                    <span>
                        <h3>The Tavaci House</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.</p>
                    </span>
                </div>
                
                <div className='HomePageStory'>
                    <img src={TavaciKitchen} alt='Kitchen'/>
                    <span>
                        <h3>Tavaci Kitchen</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.</p>
                    </span>
                </div>

                <div className='HomePageStory'>
                    <img src={GreenInterior} alt='Interior'/>
                    <span>
                        <h3>Green Turtle Interior</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.</p>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default HomePage;