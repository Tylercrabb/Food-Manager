import React, { Component } from 'react';
import FridgeInventory from './components/FridgeInventory'
import fridge from './images/fridge.png';
import pantry from './images/pantry.png'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './app.css'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
        <Link to="/fridge"><img src={fridge} className="App-logo" alt="logo" /></Link>
          <img src={pantry} className="App-logo" alt="logo" />
          <button>add an item</button>
        </header>
        <Route exact path="/fridge" component={FridgeInventory}/>
      </div>
      </Router>
    );
  }
}

export default App;
