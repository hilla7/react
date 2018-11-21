import React, { Component } from 'react';
import PortfolioContainer from '../portfolio-container/portfolio-container';
import './main.css';
import About from '../about/about';
import VIEWS from '../../constants/views.constants';
import PropsTypes from 'prop-types';

class Main extends Component {
    constructor(props) {
        super(props);
        this.switchView = this.switchView.bind(this);
    }
    
    switchView() {
        if (this.props.view === VIEWS.ABOUT) {
            return <About />;
        }
        return <PortfolioContainer view={this.props.view} />;
    }

    render() {
        return (
            < div className="main" >
                {this.switchView()}
            </div >
        );
    }
}

Main.propsTypes = {
    view: PropsTypes.string
}

Main.defaultProps = {
    view: VIEWS.ITEMS
}

export default Main;