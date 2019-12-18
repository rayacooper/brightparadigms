import React from 'react';

import './HomePage.css'

import House from './../../Assets/Main-House.jpg'

const HomePage = () => {
    return(
        <div className="HomePageMain">
            <img src={House} alt='Home Photography'/>
        </div>
    )
}

export default HomePage;