import React from 'react'
import './Loader.css';
import foodloader from '../../assests/images/food loader.gif';
function Loader() {
    return (
        <div className='main-loader'>
            <img src={foodloader} alt="no image" className='food-loader-image' />
        </div>
    )
}

export default Loader
