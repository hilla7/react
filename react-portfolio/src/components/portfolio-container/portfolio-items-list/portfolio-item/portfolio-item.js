import React, { Component } from 'react';
import './portfolio-item.css';
import Button from '../../../button/button';
import Image from '../../../image/image'
import { FaTrash, FaEdit } from 'react-icons/fa';
import PropsTypes from 'prop-types';

class PortfolioItem extends Component {
    constructor(props){
        super(props);
        this.handleEditItem = this.handleEditItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleEditItem(e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.editItem();
    }

    handleDeleteItem(e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.deleteItem();
    }
    
    render() {
        return (
            <div>
                <h3 className="title">
                    {this.props.item.title}
                </h3>
                <hr className="separator" />
                <Image height="150" width="150" src={this.props.item.imageUrl} alt={this.props.item.title} />
                <Button onClick={this.handleEditItem} label={<FaEdit/>} type="button" />
                <Button onClick={this.handleDeleteItem} label={<FaTrash/>} type="button" />
            </div>
        );
    }
}

PortfolioItem.propsTypes = {
    item:  PropsTypes.shape({
        title: PropsTypes.string.isRequired, 
        description: PropsTypes.string, 
        imageUrl: PropsTypes.string.isRequired, 
        id: PropsTypes.number.isRequired
    }), 
    editItem: PropsTypes.func.isRequired,
    deleteItem: PropsTypes.func.isRequired
}

export default PortfolioItem;