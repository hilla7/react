import React, { Component } from 'react';
import './portfolio-item-view.css';
import Image from '../../image/image';
import PropsTypes from 'prop-types';
import Button from '../../button/button';
import { FaTimes } from 'react-icons/fa';

class PortfolioItemView extends Component {
    render() {
        return (
            <div className="item-view">
                <div className="close-btn">
                    <Button onClick={this.props.onClosed} label={<FaTimes />} type="button" />
                </div>
                <h1 className="title">
                    {this.props.item.title}
                </h1>
                <div className="item-content">
                    <div className="item-image">
                        <Image height="600" width="800" src={this.props.item.imageUrl} alt={this.props.item.title} />
                    </div>
                    <div className="description">
                        {this.props.item.description}
                    </div>
                </div>
            </div>

        );
    }
}

PortfolioItemView.propsTypes = {
    item: PropsTypes.shape({
        title: PropsTypes.string.isRequired,
        description: PropsTypes.string,
        imageUrl: PropsTypes.string.isRequired,
        id: PropsTypes.number.isRequired
    }),
    onClosed: PropsTypes.func.isRequired
}

export default PortfolioItemView;