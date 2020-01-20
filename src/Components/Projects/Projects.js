import React from 'react';

import {Link, withRouter} from 'react-router-dom';

import './Projects.css'

import Photo from './../../Assets/lamp-image-dark.jpg'

const News = () => {
    return(
        <div className='NewsMain'>
            <Link to='/projects/projectx'>
                <div className='NewsEntry'>
                    <h1>Project X</h1>
                    <p>02.03.2020</p>
                    <img src={Photo} alt='Project'/>
                </div>
            </Link>

            <Link to='/projects/projectx'>
                <div className='NewsEntry'>
                    <h1>Project Y</h1>
                    <p>02.05.2020</p>
                    <img src={Photo} alt='Project'/>
                </div>
            </Link>

            <Link to='/projects/projectx'>
                <div className='NewsEntry'>
                    <h1>Project Z</h1>
                    <p>02.10.2020</p>
                    <img src={Photo} alt='Project'/>
                </div>
            </Link>
        </div>
    )
}

export default withRouter(News);