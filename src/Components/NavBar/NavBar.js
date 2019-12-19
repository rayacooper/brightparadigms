import React, {useState} from 'react';
import './NavBar.css'

import {Link, withRouter} from 'react-router-dom';

import Hamburger from './../../Assets/hamburger-menu.png'

const NavBar = () => {

    let [dropDown, updateDropDown] = useState(false)

    const clickMenu = () => {
        updateDropDown(!dropDown)
    }

    return(
        <div className="NavBarMain">

            <div className="NavBarLogo">
                <h3>BRIGHT PARADIGMS</h3>
            </div>

            <div className='NavBarLinks'>
                <Link className='LinkLink' to='/'>Home</Link>
                <Link className='LinkLink' to='/about'>About Us</Link>
                <Link className='LinkLink' to='/contact'>Contact</Link>
            </div>

            <div className="NavBarHamburger" onClick={() => clickMenu()}>
                <img src={Hamburger} alt='Menu' />
            </div>

            <div className={dropDown ? "NavBarDropDownVisible" : "NavBarDropDownHidden"}>
                <ul className='LinkLink'>
                    <li className='LinkLink'><Link className='LinkLink' to='/'>Home</Link></li>
                    <li><Link className='LinkLink' to='/about'>About</Link></li>
                    <li><Link className='LinkLink' to='/contact'>Contact</Link></li>
                </ul>
            </div>
            
        </div>
    )
}

export default withRouter(NavBar);