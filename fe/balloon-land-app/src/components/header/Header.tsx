import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faEnvelope, faSquarePhone, faPhone } from '@fortawesome/free-solid-svg-icons'

import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <>
                <div className='header'>
                    <div className='header-title'>Ballon-landia welcome you</div>
                </div>

            </>
        );
    }
}

export default Header;