import React from 'react';

import './AdvertisementBox.css';
import "react-photo-album/rows.css";

import DynamicImageGallery from "../gallery/DynamicImageGallery";

const AdvertisementBox: React.FC = () => {

    return (
        <div className='box'>
            <DynamicImageGallery
                photoLocation='/adv-images'
                customLayout="rows"
            />
        </div>
    );
};

export default AdvertisementBox