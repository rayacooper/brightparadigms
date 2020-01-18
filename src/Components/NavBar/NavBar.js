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
                    <img id='logo' src={LogoCropped} alt='Bright Paradigms'/>
                    <img id='logocropped' src={LogoRight} alt='Bright Paradigms'/>
                    <img id='lettering' src={Lettering} alt='Bright Paradigms'/>
                    <img id='letteringmobile' src={LetteringMobile} alt='Bright Paradigms'/>
                </div>  
            </Link>
            

            <div className='NavBarLinks'>
                <Link className='LinkLink' to='/' >Home</Link>
                <Link className='LinkLink' to='/whoweare'>Who We Are</Link>
                <Link className='LinkLink' to='/about' >What We Do</Link>
                <Link className='LinkLink' to='/projects' >Projects</Link>
                <a className='LinkLink' href='#ContactUs'>Contact</a>
            </div>

            <div className="NavBarHamburger" onClick={() => clickMenu()}>
                <img src={Hamburger} alt='Menu' />
            </div>

            <div className={dropDown ? "NavBarDropDownVisible" : "NavBarDropDownHidden"}>
                <ul className='LinkLink'>
                    <li><Link className='LinkLink' to='/' onClick={() => updateDropDown(false)}>Home</Link></li>
                    <li><Link className='LinkLink' to='/whoweare' onClick={() => updateDropDown(false)}>Who We Are</Link></li>
                    <li><Link className='LinkLink' to='/about' onClick={() => updateDropDown(false)}>What We Do</Link></li>
                    <li><Link className='LinkLink' to='/projects' onClick={() => updateDropDown(false)}>Projects</Link></li>
                    <li><a className='LinkLink' href='#ContactUs'>Contact</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default withRouter(NavBar);