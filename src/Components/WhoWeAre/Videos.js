import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Carat from './../../Assets/Carat_Symbol_Reverse.png';
import ClimateWidget01 from './../../Assets/Climate_Widget_Overview_01.mp4';
import ClimateWidget02 from './../../Assets/Climate_Widget_Overview_02.mp4';
import DesignCenter01 from './../../Assets/Design_Center_Introducing_the_Library.mp4';
import DesignCenter02 from './../../Assets/Design_Center_Adding_to_your_Library.mp4';
import DesignCenter03 from './../../Assets/Design_Center_Managing_your_Library.mp4';
import Equinox01 from './../../Assets/Equinox_Shades_Widget_01.mp4';
import Equinox02 from './../../Assets/Equinox_Shades_Widget_02';
import EquinoxTimer01 from './../../Assets/Equinox_Timers_Widget_01.mp4';
import EquinoxTimer02 from './../../Assets/Equinox_Timers_Widget_02.mp4'
import './Videos.css'

const Videos = () => {
    return(
        <div className='VideosMain'>
            <Link to='/whoweare' className="VideosLinkBack"><img src={Carat}/><h1>Back to Forrest's Profile</h1></Link>
            
            <video controls>
                <source src={ClimateWidget01} type="video/mp4" />>
                {/* <source src={'#'} type="video/ogg" />> */}
            </video>
            <h1 className='VideoLabel'>Climate Widget 1 of 2</h1>

            <video controls>
                <source src={ClimateWidget02} type="video/mp4" />>
                {/* <source src={'#'} type="video/ogg" />> */}
            </video>
            <h1 className='VideoLabel'>Climate Widget 2 of 2</h1>

            <video controls>
                <source src={DesignCenter01} type="video/mp4" />>
                {/* <source src={'#'} type="video/ogg" />> */}
            </video>
            <h1 className='VideoLabel'>Design Center - Introducing the library</h1>

            <video controls>
                <source src={DesignCenter02} type="video/mp4" />>
                {/* <source src={'#'} type="video/ogg" />> */}
            </video>
            <h1 className='VideoLabel'>Design Center - Adding to your library</h1>

            <video controls>
                <source src={DesignCenter03} type="video/mp4" />>
                {/* <source src={'#'} type="video/ogg" />> */}
            </video>
            <h1 className='VideoLabel'>Design Center - Managing your library</h1>
            <br />

            <video controls>
                <source src={Equinox01} type="video/mp4" />>
                {/* <source src={'#'} type="video/ogg" />> */}
            </video>
            <h1 className='VideoLabel'>Equinox Shades Widget 1 of 2</h1>
            <br />

            <video controls>
                <source src={Equinox02} type="video/mp4" />>
                {/* <source src={'#'} type="video/ogg" />> */}
            </video>
            <h1 className='VideoLabel'>Equinox Shades Widget 2 of 2</h1>
            <br />

            <video controls>
                <source src={EquinoxTimer01} type="video/mp4" />>
                {/* <source src={'#'} type="video/ogg" />> */}
            </video>
            <h1 className='VideoLabel'>Equinox Timer Widget 1 of 2</h1>
            <br />

            <video controls>
                <source src={EquinoxTimer02} type="video/mp4" />>
                {/* <source src={'#'} type="video/ogg" />> */}
            </video>
            <h1 className='VideoLabel'>Equinox Timer Widget 2 of 2</h1>
            <br />
        </div>
    )
}

export default withRouter(Videos);