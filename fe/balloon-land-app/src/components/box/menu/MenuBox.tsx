import React, { useState } from 'react';

import './MenuBox.css';
import "react-photo-album/rows.css";
import Description from './Description.tsx';
import Polaroid from './Polaroid.tsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface MenuItem {
    title: string;
    description: string;
    photoUrl: string;
}

const menuList: MenuItem[] = [
    {
        "title": "Scianka balonowa",
        "description": "Description Scianka balonowa I posted solutions I made for my problem but they don't work fine. All I need to do is to correctly create a JSON object and initialize it in my TypeScript method",
        "photoUrl": "zone"
    },
    {
        "title": "Bukiety jadalnie",
        "description": "Description Bukiety jadalnie. All I need to do is to correctly create a JSON object and initialize it in my TypeScript method",
        "photoUrl": "cuk"
    },
    {
        "title": "Boxy presentowe",
        "description": "Description Boxy presentowe (zabawka w balonie) Well, the correct solution would be to declare output on the scope of",
        "photoUrl": "ballon"
    }
]

const MenuBox: React.FC = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === menuList.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? menuList.length - 1 : prevIndex - 1
        );
    };

    const currentItem = menuList[currentIndex];

    return (
        <div className='menu-box'>

            <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrev} className="nav-button nav-button-prev"/>

            <div key={currentIndex} className="fade-card">
                <Description
                    title={currentItem.title}
                    description={currentItem.description}
                />
            </div>

            <div key={currentIndex-1} className='fade-photo'>
                <Polaroid
                    photoUrl={currentItem.photoUrl}
                />
            </div>

            <FontAwesomeIcon icon={faChevronRight} onClick={handleNext} className="nav-button nav-button-next"/>

        </div>
    );
};

export default MenuBox