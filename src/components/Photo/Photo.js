import React from 'react';
import './Photo.css';

const Photo = ({ photo }) => {
    const { img } = photo;
    return (
        <div className="image-container">
            <img className='image' src={img} alt="" />
        </div>
    );
};

export default Photo;