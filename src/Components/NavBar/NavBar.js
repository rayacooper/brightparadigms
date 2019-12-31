import React, {useState} from 'react';
import './NavBar.css'

import {Link, withRouter} from 'react-router-dom';

import Hamburger from './../../Assets/hamburger-menu.png'
import LogoRight from './../../Assets/Bright-Paradigms-Logo-Just-White-Cropped-Right.png'
import Lettering from './../../Assets/Bright-Paradigms-Lettering.png'
import LetteringMobile from './../../Assets/Bright-Paradigms-Lettering-Mobile.png'
import LogoCropped from './../../Assets/Bright-Paradigms-Logo-Just-White.png'

const NavBar = () => {

    let [dropDown, updateDropDown] = useState(false)

    const clickMenu = () => {
        updateDropDown(!dropDown)
    }

    return(
        <div className="NavBarMain">
            <Link className='NavBarLogo' to='/'>
                <div className="NavBarLogo">
                    <img id='logo' src={LogoCropped} />
                    <img id='logocropped' src={LogoRight} />
                    <img id='lettering' src={Lettering} />
                    <img id='letteringmobile' src={LetteringMobile} />
                </div>  
            </Link>
            

            <div className='NavBarLinks'>
                <Link className='LinkLink' to='/' >Home</Link>
                <Link className='LinkLink' to='/about' >About Us</Link>
                <Link className='LinkLink' to='/news' >News</Link>
            </div>

            <div className="NavBarHamburger" onClick={() => clickMenu()}>
                <img src={Hamburger} alt='Menu' />
            </div>

            <div className={dropDown ? "NavBarDropDownVisible" : "NavBarDropDownHidden"}>
                <ul className='LinkLink'>
                    <li><Link className='LinkLink' to='/' onClick={() => updateDropDown(false)}>Home</Link></li>
                    <li><Link className='LinkLink' to='/about' onClick={() => updateDropDown(false)}>About</Link></li>
                    <li><Link className='LinkLink' to='/news' onClick={() => updateDropDown(false)}>News</Link></li>
                </ul>
            </div>
            
        </div>
    )
}

export default withRouter(NavBar);