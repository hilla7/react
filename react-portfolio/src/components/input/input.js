import React, { Component } from 'react';
import './input.css';
import PropsType from 'prop-types';

class Input extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.props.onChange(value, this.props.label);
    }

    render() {
        return (
            <input className="input"
                required
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
            ></input>
        );
    }
}

Input.propsType = {
    value: PropsType.string,
    placeholder: PropsType.string,
    onChange: PropsType.func.isRequired
}

export default Input;