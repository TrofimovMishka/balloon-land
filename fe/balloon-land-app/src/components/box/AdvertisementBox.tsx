import React from 'react';
import ImageGalleryWrapper from '../gallery/ImageGalleryWrapper';
import './AdvertisementBox.css';
import CustomImageGallery from './CustomImageGallery';

class AdvertisementBox extends React.Component {
    render() {

        return (
            <>
                <div className='box'>
                    <CustomImageGallery />
                </div>
            </>
        )
    }
}

export default AdvertisementBox