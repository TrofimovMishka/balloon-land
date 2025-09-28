import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faSquareEnvelope, faEnvelope,  faSquarePhone, faPhone } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className='footer'>
          <div>Write to us and follow us:</div>
          <div className='follow-us'>
            {/* contact icons */}
            <div className='instagram'>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className='fb'>
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className='telegram'>
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
            <div className='gmail'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className='phone'>
              <FontAwesomeIcon icon={faPhone} />
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Footer;