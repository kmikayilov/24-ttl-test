import ttl from './assets/icons/24-ttl.svg';
import basket from './assets/icons/b2basket.svg';
import cloudcontent from './assets/icons/cloudcontent.svg';
import React, {useState, Component} from 'react';
import Popup from './Components/Popup/Popup';

import './App.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  togglePopup() {
    // console.log(this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App_wrapper">
          <div className="logo" ><img src={ttl} alt="24-ttl-logo"/></div>
          <div className="logo" ><img src={cloudcontent} alt="cloudcontent-logo"/></div>
          <div className="logo" onClick={this.togglePopup.bind(this)}><img src={basket} alt="b2basket-logo"/></div>
        </div>

        {this.state.isOpen ? <Popup closePopup={this.togglePopup.bind(this)} /> : null}

      </div>
    );
  }
}

export default App;
