import React, { Component } from 'react';
import Header from './components/header/header';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';
import VIEWS from './constants/views.constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: VIEWS.ITEMS, 
    };
    this.changeView= this.changeView.bind(this);
  }

  changeView(selectedView) {
    this.setState((prevState, prevProps) => {
      return { ...prevState, view: selectedView };
    });
  }



  render() {
    return (
      <div className="App">
        <Header className="header" />
        <Main className="main" 
              view={this.state.view}/>
        <Sidebar className="sidebar" handleItemClicked={this.changeView} />
      </div>
    );
  }
}

export default App;
