import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// components
import AddForm from './addForm';
import requiresLogin from './requires-login'
import RecipeViewer from './recipeViewer';
import FridgeInventory from './FridgeInventory'
import PantryInventory from './PantryInventory'

// icons
import fridge from '../images/fridge.png';
import pantry from '../images/pantry.png';
import plus from '../images/baseline_add_black_18dp.png'
import home from '../images/outline_home_black_48dp.png'



class Dashboard extends Component {
  render() {
    return (
      
      <div className="Dashboard">
          <nav className="App-header">
            <Link className="Fridge-logo" to="/fridge"><img src={fridge}  alt="logo" /></Link>
            <Link className="Pantry-logo" to ="/pantry"><img src={pantry}  alt="logo" /></Link>
            <Link className="Add-logo" to="/add"><img src ={plus} alt ='add'/></Link>
            <Link className="Home-logo"to="/dashboard"><img src={home} alt ='home'/></Link>
            <Link className="Recipe-logo" to="/recipe"><button >Find a Recipe</button></Link>
          </nav>
      <main>
        <Route  path='/fridge' component={FridgeInventory}/>
        <Route  path='/pantry' component={PantryInventory}/>
        <Route  path ='/add' component={AddForm} />
        <Route  path ='/recipe' component={RecipeViewer} />
      </main>
      <p className="footer"></p>
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
