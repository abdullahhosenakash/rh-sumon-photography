import { } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Photos from '../Photos/Photos';
import usePhotos from '../usePhotos/usePhotos';

const Portfolio = () => {

    const [photos, setPhotos] = usePhotos();
    return (
        <div>
            <Photos photos={photos}></Photos>
        </div>
    );
};

export default Portfolio;