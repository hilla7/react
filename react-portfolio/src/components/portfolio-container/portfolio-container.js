import React, { Component } from 'react';
import { getPortfolioItems } from '../../mocks/portfolio-items.mock';
import VIEWS from '../../constants/views.constants';
import PortfolioItemsList from './portfolio-items-list/portfolio-items-list';
import PortfolioForm from './portfolio-form/portfolio-form';
import PropsTypes from 'prop-types';
import PortfolioItemView from './portfolio-item-view/portfolio-item-view';
import { getInitializedItem } from '../../helpers/initialized-item.helper';

class PortfolioContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolioItems: [],
            view: this.props.view,
            newId: 20
        };

        this.handleItemClosed = this.handleItemClosed.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleEditItem = this.handleEditItem.bind(this);
        this.handleItemClicked = this.handleItemClicked.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.view !== this.state.view) {
            this.setState({ ...this.state, view: nextProps.view });
        }
    }

    getItemIndex(item) {
        return this.state.portfolioItems.findIndex((foundItem) => foundItem.id === item.id);
    }

    handleDeleteItem(item) {
        const selectedPosition = this.getItemIndex(item);
        if (selectedPosition > -1) {
            this.setState({
                portfolioItems: [...this.state.portfolioItems.slice(0, selectedPosition),
                ...this.state.portfolioItems.slice(selectedPosition + 1)], 
                selectedItem:  getInitializedItem()
            });
        }
    }

    componentDidMount() {
        this.setState((prevState, prevProps) => {
            return { ...this.state, portfolioItems: getPortfolioItems() }
        })
    }


    handleEditItem(item) {
        this.handleDeleteItem(item)

        this.setState((prevState, prevProps) => {
            return { selectedItem: item, view: VIEWS.NEW };
        });

    }

    handleSubmit(item) {
        if (!item.id) {
            item.id = this.state.newId;
        }
        this.setState((prevState, prevProps) => {
            return {
                selectedItem: getInitializedItem(),
                portfolioItems: [...this.state.portfolioItems, item],
                view: VIEWS.ITEMS,
                newId: prevState.newId + 1
            };
        });
    }

    handleItemClicked(item) {
        this.setState((prevState, prevProps) => {
            return { selectedItem: item, view: VIEWS.ITEM };
        });
    }

    handleItemClosed() {
        this.setState((prevState, prevProps) => {
            return { selectedItem: null, view: VIEWS.ITEMS };
        });
    }

    showRelevantView() {
        switch (this.state.view) {
            case VIEWS.ITEMS:
                return this.getItemsListView();
            case VIEWS.NEW:
                return <PortfolioForm item={this.state.selectedItem}
                    onSubmit={this.handleSubmit} />;
            case VIEWS.ITEM: 
                return <PortfolioItemView item={this.state.selectedItem}
                onClosed={this.handleItemClosed}/>
            default:  
                return this.getItemsListView();
        }
    }

    getItemsListView(){
        return <PortfolioItemsList portfolioItems={this.state.portfolioItems}
                    onItemClicked={this.handleItemClicked}
                    onDeleteItem={this.handleDeleteItem}
                    onEditItem={this.handleEditItem}/>;
    }

    render() {
        return (
            < div >
                {this.showRelevantView()}
            </div >
        );
    }
}

PortfolioContainer.propsTypes = {
    view: PropsTypes.string
}

PortfolioContainer.defaultProps = {
    view: VIEWS.ITEMS
}

export default PortfolioContainer;