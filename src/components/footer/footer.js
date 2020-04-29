import React from 'react';
import '../footer/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ig = <FontAwesomeIcon icon={faInstagram} />
const fb = <FontAwesomeIcon icon={faFacebookF} />
const twt = <FontAwesomeIcon icon={faTwitter} />
const git = <FontAwesomeIcon icon={faGithub} />

const Footer =  props => {

    return (
        <div className='footerContainer'>
            <div className='ssC'>
                <i className='social'>{ig}</i>
                <i className='social'>{fb}</i>
                <i className='social'>{twt}</i>
                <i className='social'>{git}</i>
            </div>
            All Rights Reserved ®
        </div>
    )
}

export default Footer