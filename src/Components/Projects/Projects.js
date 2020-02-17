import React, {useState} from 'react';

// import {Link, withRouter} from 'react-router-dom';

import './Projects.css'

import Photo from './../../Assets/lamp-image-dark.jpg'
import SouthRim from './../../Assets/Grand-Canyon-South-Rim.jpg';
import CloseButton from './../../Assets/Close-Button.png';

const News = () => {
    let [projectsVisible, updateProjectsVisible] = useState(false);
    return(
        <div className='NewsMain'>
            <div className={projectsVisible ? 'ProjectsPhotos' : 'ProjectsPhotosHidden'}>
                <img id='ProjectsPhotosClose' onClick={() => updateProjectsVisible(false)} src={CloseButton} />
            </div>
            <a href='https://www.vantagecontrols.com/about/press-room/news/vantage-grandcanyon-visitor-center.aspx' target='blank'>
                <div className='NewsEntry'>
                    <h1>Grand Canyon South Rim Visitor Center</h1>
                    <img src={SouthRim} alt='Project'/>
                </div>
            </a>

                <div onClick={() => updateProjectsVisible(true)} className='NewsEntry'>
                    <h1>Penguin Zoo Project</h1>
                    <img src={Photo} alt='Project'/>
                </div>

                <div className='NewsEntry'>
                    <h1>Project Y</h1>
                    <img src={Photo} alt='Project'/>
                </div>
        </div>
    )
}

export default News;