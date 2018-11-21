import React, { Component } from 'react';
import './sidebar.css';
import VIEWS from '../../constants/views.constants';
import SocialLinks from './social-links/social-links';
import PropsTypes from 'prop-types';

const MENU_ITEMS = [
    { label: 'Portfolio List', view: VIEWS.ITEMS },
    { label: 'Add New Item', view: VIEWS.NEW },
    { label: 'About', view: VIEWS.ABOUT },
]

class Sidebar extends Component {
    render() {
        return (

            <div className="sidebar">
                <ul >
                    {
                        MENU_ITEMS.map(item => {
                            return <li className="item"
                                key={item.label}
                                onClick={() => this.props.handleItemClicked(item.view)}>
                                {item.label}
                            </li>
                        })
                    }
                </ul>
                <SocialLinks />
            </div>
        );
    }
}

Sidebar.propsTypes = {
    handleItemClicked: PropsTypes.func.isRequired
}

export default Sidebar;