import React, { Component } from 'react';
import './section.css';
import Image from '../../image/image';
import PropTypes from 'prop-types';

class Section extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.body}</div>
                <Image
                    width="500"
                    src={this.props.imageUrl}
                    alt="Lorem" />
            </div>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default Section;