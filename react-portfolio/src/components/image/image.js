import React, { Component } from 'react';
import './image.css';
import PropTypes from 'prop-types';

class Image extends Component {
    render() {
        return (
            <div className="image">
                <img height={this.props.height}
                    width={this.props.width}
                    src={this.props.src}
                    alt={this.props.alt} />
            </div>);
    }
}

Image.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
};

Image.defaultProps = {
    height: "200",
    width: "200",
    alt: "image"
};




export default Image;