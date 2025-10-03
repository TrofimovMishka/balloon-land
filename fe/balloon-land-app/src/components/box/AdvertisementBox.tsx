import React from 'react';

import './AdvertisementBox.css';
import "react-photo-album/rows.css";

// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

import DynamicImageGallery from "../gallery/DynamicImageGallery";

const AdvertisementBox: React.FC = () => {

    return (
        <div className='box'>
            <DynamicImageGallery />
        </div>
    );
};

export default AdvertisementBox