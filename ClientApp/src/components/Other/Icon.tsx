import React from 'react'
import IconImage from '../assets/images/icon.png'
import '../styles/Icon.css'
function Icon() {
    return (
        <div className='Icon'>
            <img src={`${IconImage}`}></img> 
        </div>
    )
}

export default Icon
