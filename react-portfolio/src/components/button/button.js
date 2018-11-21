import React, { Component } from 'react';
import './button.css';
import PropTypes from 'prop-types';

class Button extends Component {

    render() {
        return (
            <button onClick={this.props.onClick}
                type={this.props.type}
                className="button-default" >
                {this.props.label}
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    type: PropTypes.string.isRequired
};

export default Button;