import React, { Component } from 'react';
import FridgeInventory from './components/FridgeInventory'
import PantryInventory from './components/PantryInventory'
import fridge from './images/fridge.png';
import pantry from './images/pantry.png'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddForm from './components/addForm';
import './app.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Link to="/fridge"><img src={fridge} className="App-logo" alt="logo" /></Link>
        <Link to ="/pantry"><img src={pantry} className="App-logo" alt="logo" /></Link>
        <Link to="/add"><button>add an item</button></Link>
        <Link to="/"><button>Home</button></Link>
        </header>
        <main>
        <Route exact path="/fridge" component={FridgeInventory}/>
        <Route exact path='/pantry' component={PantryInventory}/>
        <Route exact path="/add" component={AddForm}/>
      </main>
      </div>
    );
  }
}

export default App;
