import React from 'react';
import Image from './../../../Assets/lamp-image.jpg'

import './AllProjects.css'

const ProjectX = () => {
    return (
        <div className="ProjectPostMain">
            <h1>Project X</h1>
            <div className="ProjectPostInner">
                <img src={Image}/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    )
}

export default ProjectX;