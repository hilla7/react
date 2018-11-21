import React, { Component } from 'react';
import './portfolio-items-list.css';
import PortfolioItem from './portfolio-item/portfolio-item';
import PropsTypes from 'prop-types';

class PortfolioItemsList extends Component {
    render() {
        return (
            <ul className="flex-container">
                {
                    this.props.portfolioItems.map((item) => {
                        return <li onClick={() => this.props.onItemClicked(item)}
                            className="flex-item"
                            key={item.id}>
                            <PortfolioItem item={item}
                                deleteItem={() => this.props.onDeleteItem(item)}
                                editItem={() => this.props.onEditItem(item)} />
                        </li>
                    })
                }
            </ul>
        );
    }
}

PortfolioItemsList.propsTypes = {
    portfolioItems: PropsTypes.arrayOf(PropsTypes.shape({
        title: PropsTypes.string.isRequired,
        description: PropsTypes.string,
        imageUrl: PropsTypes.string.isRequired,
        id: PropsTypes.number.isRequired
    })),
    onDeleteItem: PropsTypes.func.isRequired,
    onEditItem: PropsTypes.func.isRequired,
    onItemClicked: PropsTypes.func.isRequired,
}
export default PortfolioItemsList;