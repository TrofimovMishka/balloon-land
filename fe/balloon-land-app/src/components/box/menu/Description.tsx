import React from 'react';

import './Description.css';

interface DescriptionProps {
  title: string;
  description: string;
}

const Description: React.FC<DescriptionProps> = ({title, description}) => {

    return (
        <div id='description'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Description