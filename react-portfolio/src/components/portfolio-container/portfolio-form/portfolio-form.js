import React, { Component } from 'react';
import './portfolio-form.css';
import Button from '../../button/button';
import Input from '../../input/input';
import { FaSave } from 'react-icons/fa';
import PropsTypes from 'prop-types';
import { getInitializedItem } from '../../../helpers/initialized-item.helper';
import { capitalizeFirstLetter } from '../../../helpers/string-manipulator.helper';

const required = ['Title', 'Image'];

class PortfolioForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            isTriedSubmit: false,
            isFormValid: this.props.item && this.props.item.title && this.props.item.imageUrl
        };
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState((prevState, prevProps)=>{
            return {...this.state, isTriedSubmit: true};
        })
        if (!this.state.isFormValid) {
            return;
        }
        this.props.onSubmit(this.state.item);
    }

    handleValueChange(value, label) {
        this.setState((prevState, prevProps) => {
            let newState = { ...prevState, item: {...prevState.item, [label]: value} }
            if (!newState.item.title || !newState.item.imageUrl) {
                return newState;
            }
            return { ...newState, isFormValid: true }
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                {Object.keys(this.state.item).map(key=>{
                    if(key === 'id') return null;
                    return <Input value={this.state.item[key]}
                    placeholder={capitalizeFirstLetter(key)}
                    label={key}
                    key={key}
                    onChange={this.handleValueChange} />
                })}
                <div className="validation-error">
                    {this.state.isTriedSubmit && !this.state.isFormValid ? `${required.join(', ')} are required!` : ''}
                </div>
                <Button onClick={this.handleSubmit}
                    label={<FaSave />}
                    type="submit" />
            </form>
        );
    }
}

PortfolioForm.propsTypes = {
    item: PropsTypes.shape({
        title: PropsTypes.string,
        description: PropsTypes.string,
        imageUrl: PropsTypes.string,
        id: PropsTypes.number
    })
}

PortfolioForm.defaultProps = {
    item: getInitializedItem()
}

export default PortfolioForm;