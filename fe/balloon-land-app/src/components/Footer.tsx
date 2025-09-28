import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faEnvelope, faSquarePhone, faPhone } from '@fortawesome/free-solid-svg-icons'

const instagramUrl: string = import.meta.env.VITE_INSATGRAM_URL
const facebookUrl: string = import.meta.env.VITE_FACEBOOK_URL
const telegramUrl: string = import.meta.env.VITE_TELEGRAM_URL
const mailToUrl: string = import.meta.env.VITE_MAIL_URL
const phoneNumber: string = import.meta.env.VITE_PHONE_NUMBER

// TODO: Refactor for phone size
class Footer extends React.Component {
  render() {
    return (
      <>
        <div className='footer'>
          <div>Write to us and follow us:</div>
          <div className='follow-us'>
            <div
              className='social-media'
              onClick={() => window.open(instagramUrl, "_blank")}
              style={{ cursor: 'pointer' }}

            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </div>
            <div
              className='social-media'
              onClick={() => window.open(facebookUrl, "_blank")}
              style={{ cursor: 'pointer' }}

            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </div>
            <div
              className='social-media'
              onClick={() => window.open(telegramUrl, "_blank")}
              style={{ cursor: 'pointer' }}

            >
              <FontAwesomeIcon icon={faPaperPlane} size="lg" />
            </div>
            <div
              className='social-media'
              onClick={() => window.open(mailToUrl, "_blank")}
              style={{ cursor: 'pointer' }}

            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </div>
            <div className="phone-container">
              <FontAwesomeIcon icon={faPhone} size="lg" className="phone-icon" />
              <span className="phone-text">{phoneNumber}</span>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Footer;