import React, { Component } from 'react';
import {connect} from 'react-redux';
import FridgeInventory from './FridgeInventory'
import PantryInventory from './PantryInventory'
import fridge from '../images/fridge.png';
import pantry from '../images/pantry.png'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddForm from './addForm';
import requiresLogin from './requires-login'
import RecipeViewer from './recipeViewer';


class Dashboard extends Component {
  render() {
    return (
      <Router>
      <div className="Dashboard">
        <header className="App-header">
        <Link to="/fridge"><img src={fridge} className="App-logo" alt="logo" /></Link>
        <Link to ="/pantry"><img src={pantry} className="App-logo" alt="logo" /></Link>
        <Link to="/add"><button>add an item</button></Link>
        <Link to="/dashboard"><button>Home</button></Link>
        <Link to="/recipe"><button>Find a Recipe</button></Link>
        </header>
        <main>
        <Route  path='/fridge' component={FridgeInventory}/>
        <Route  path='/pantry' component={PantryInventory}/>
        <Route  path ='/add' component={AddForm} />
        <Route  path ='/recipe' component={RecipeViewer} />
      </main>
      </div>
      </Router>
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
