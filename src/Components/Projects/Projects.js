import React from 'react';

import './Projects.css'

import Photo from './../../Assets/lamp-image-dark.jpg'

const News = () => {
    return(
        <div className='NewsMain'>
            <div className='NewsEntry'>
                <h2>Bright Paradigms Launch</h2>
                <p>02.03.2020</p>
                <div className="NewsEntryInner">
                    <img src={Photo} alt='Project'/>
                        <p>
                            We here at Bright Paradigms are excited for our launch.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                </div>
                
            </div>
        </div>
    )
}

export default News;