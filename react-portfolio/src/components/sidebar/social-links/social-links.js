import React, { Component } from 'react';
import SocialLink from './social-link/social-link';
import { FaTwitter, FaFacebook, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './social-links.css';

class SocialLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    label: <FaTwitter />,
                    url: 'https://twitter.com/?lang=en'
                },
                {
                    label: <FaFacebook />,
                    url: 'https://www.facebook.com/'
                },
                {
                    label: <FaLinkedinIn />,
                    url: 'https://www.linkedin.com'
                },
                {
                    label: <FaInstagram />,
                    url: 'https://www.instagram.com'
                }
            ]
        }
    }
    render() {
        return (
            <div className="links">
                {this.state.links.map((link) => {
                    return <SocialLink key={link.url} url={link.url} label={link.label} />
                })}
            </div>
        )
    }
}

export default SocialLinks;