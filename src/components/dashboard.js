import React, { Component } from 'react';
import {connect} from 'react-redux';
import FridgeInventory from './FridgeInventory'
import PantryInventory from './PantryInventory'
import fridge from '../images/fridge.png';
import pantry from '../images/pantry.png'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddForm from './addForm';
import requiresLogin from './requires-login'



class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <header className="App-header">
        <Link to="/fridge"><img src={fridge} className="App-logo" alt="logo" /></Link>
        <Link to ="/pantry"><img src={pantry} className="App-logo" alt="logo" /></Link>
        <Link to="/add"><button>add an item</button></Link>
        <Link to="/dashboard"><button>Home</button></Link>
        </header>
        <main>
        <FridgeInventory />
        <Route exact path='/pantry' component={PantryInventory}/>
        <AddForm />
        
      </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName} ${currentUser.lastName}`
      
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard))
