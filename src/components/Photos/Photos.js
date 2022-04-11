import React from 'react';
import Photo from '../Photo/Photo';
import './Photos.css';

const Photos = ({ photos }) => {
    return (
        <div className="images-container">
            {
                photos.map(photo => <Photo
                    photo={photo}
                    key={photo.id}
                ></Photo>)
            }
        </div>
    );
};

export default Photos;