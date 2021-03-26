import React, { useState, Component } from 'react';
import Popup from './Components/Popup/Popup';

import './App.scss';

const logos = require.context('./assets/icons', true);

class App extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            popup: ''
        };
    }

    togglePopup(company) {
        if (this.state.isOpen) {
            this.setState({
                isOpen: false,
                popup: ''
            });
        } else {
            this.setState({
                isOpen: true,
                popup: company
            });
        }

        console.log(this.state.isOpen);
        console.log(this.state.popup);
    }

    render() {
        return (
            <div className="App">
        <div className="App_wrapper">
          <div className="logo" onClick={() => this.togglePopup('24-ttl')}><img src={logos('./24-ttl.svg').default} alt="24-ttl-logo"/></div>
          <div className="logo" onClick={() => this.togglePopup('cloudcontent')}><img src={logos('./cloudcontent.svg').default} alt="cloudcontent-logo"/></div>
          <div className="logo" onClick={() => this.togglePopup('b2basket')}><img src={logos('./b2basket.svg').default} alt="b2basket-logo"/></div>
        </div>

        {this.state.isOpen ? <Popup  company={this.state.popup} closePopup={() => this.togglePopup('')} /> : null}

      </div>
        );
    }
}

export default App;