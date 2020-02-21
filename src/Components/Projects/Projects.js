import React, {useState} from 'react';

// import {Link, withRouter} from 'react-router-dom';

import './Projects.css'

import Photo from './../../Assets/lamp-image-dark.jpg'
import SouthRim from './../../Assets/Grand-Canyon-South-Rim.jpg';
import CloseButton from './../../Assets/Close-Button.png';

const News = () => {
    return(
        <div className='ProjectsMain'>

            {/* Images used to open the Lightbox         */}
            <div className="ProjectsRow">
                <a href='https://www.vantagecontrols.com/about/press-room/news/vantage-grandcanyon-visitor-center.aspx' target='blank'>
                    <div className='ProjectsEntry'>
                        <h1>Grand Canyon South Rim Visitor Center</h1>
                        <img src={SouthRim} alt='Project'/>
                    </div>
                </a>

                <div className='ProjectsEntry'>
                    <h1>Penguin Zoo Project</h1>
                    <img src={Photo} alt='Project'/>
                </div>
                
                <div className='ProjectsEntry'>
                    <h1>Project Y</h1>
                    <img src={Photo} alt='Project'/>
                </div>

                <div className="ProjectsColumn">
                    <img src="img2.jpg" onClick="openModal();currentSlide(2)" className="hover-shadow" />>
                </div>  
  
                <div className="ProjectsColumn">
                    <img src="img3.jpg" onClick="openModal();currentSlide(3)" className="hover-shadow" />>
                </div>

                <div className="ProjectsColumn">
                    <img src="img4.jpg" onClick="openModal();currentSlide(4)" className="hover-shadow" />>
                </div>
            </div>

            {/* The Lightbox */}
            <div id="ProjectsModal" className="ProjectsModal">
                <span className="close_cursor" onClick="closeModal()">&times;</span>

                <div className="modal-content">

                <div className="mySlides">
                    <div className="numbertext">1 / 4</div>
                        <img src="img1_wide.jpg" />>
                    </div>

                <div className="mySlides">
                    <div className="numbertext">2 / 4</div>
                        <img src="img2_wide.jpg" />>
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">3 / 4</div>
                            <img src="img3_wide.jpg" />>
                        </div>

                <div className="mySlides">
                    <div className="numbertext">4 / 4</div>
                        <img src="img4_wide.jpg"  />>
                    </div>
            </div>

            {/* Next / Previous Controls  */}
                <a id="ProjectsPrevious" onClick="plusSlides(-1)">&#10094;</a>
                <a id="ProjectsNext" onClick="plusSlides(1)">&#10095;</a>

            {/* Caption Text */}
                <div className="ProjectsCaptionContainer">
                    <p id="caption"></p>
                </div>

            {/* Thumbnail Image Controls */}
                <div className="ProjectsColumn">
                    <img className="demo" src="img1.jpg" onClick="currentSlide(1)" alt="Nature" />>
                </div>

                <div className="ProjectsColumn">
                <img className="demo" src="img2.jpg" onClick="currentSlide(2)" alt="Snow"/>>
                </div>

                <div className="ProjectsColumn">
                    <img className="demo" src="img3.jpg" onClick="currentSlide(3)" alt="Mountains"/>>
                </div>

                <div className="ProjectsColumn">
                    <img className="demo" src="img4.jpg" onClick="currentSlide(4)" alt="Lights"/>>
                </div>
        </div>
    </div>
    )
}

export default News;