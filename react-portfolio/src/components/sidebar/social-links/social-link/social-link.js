import React, { Component } from 'react';
import './social-link.css'
import PropsTypes from 'prop-types';

class SocialLink extends Component {
    render() {
        return (
            <a className="link"
                href={this.props.url}
                target="_blank"
                rel="noopener noreferrer">
                {this.props.label}
            </a>
        )
    }
}

SocialLink.propsTypes = {
    url: PropsTypes.string.isRequired,
    label: PropsTypes.string.isRequired
}

export default SocialLink;