import React from 'react';
import './Photo.css';

const Photo = ({ photo }) => {
    const { img } = photo;
    return (
        <img className='image' src={img} alt="" />
    );
};

export default Photo;