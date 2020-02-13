import React from 'react';
import './Videos.css'

const Videos = () => {
    return(
        <div className='VideosMain'>
            Hello this is videos
            <video width="320" height="240" controls>
                <source src={'#'} type="video/mp4" />>
                <source src={'#'} type="video/ogg" />>
            </video>
        </div>
    )
}

export default Videos;