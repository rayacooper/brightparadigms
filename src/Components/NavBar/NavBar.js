import React from 'react';
import './NavBar.css'

import {Link, withRouter} from 'react-router-dom';

import Hamburger from './../../Assets/hamburger-menu.png'

const NavBar = () => {
    return(
        <div className="NavBarMain">
            <div className="NavBarLogo">
                <h3>BRIGHT PARADIGMS</h3>
            </div>
            <div className='NavBarLinks'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className="NavBarHamburger">
                <img src={Hamburger} alt='Menu' />
            </div>
        </div>
    )
}

export default withRouter(NavBar);