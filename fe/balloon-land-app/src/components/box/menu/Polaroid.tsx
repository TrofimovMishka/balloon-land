import React from 'react';

import './Polaroid.css';
import DynamicImageGallery from "../../gallery/DynamicImageGallery";

interface PolaroidProps {
    photoUrl: string;
}

const Polaroid: React.FC<PolaroidProps> = ({ photoUrl }) => {

    return (
        <div id='polaroid'>
            <DynamicImageGallery
                photoLocation={photoUrl}
                customLayout="masonry"
            />
        </div>
    );
};

export default Polaroid