import React from 'react';
import {connect} from 'react-redux';
import { Route, Link} from 'react-router-dom';
import {loading, fetchFridgeInventory, fetchPantryInventory} from '../actions/index'
import {clearErrorMessage, clearExpiringItems} from '../actions'
// components
import AddForm from './addForm';
import requiresLogin from './requires-login'
import RecipeViewer from './recipeViewer';
import FridgeInventory from './FridgeInventory'
import PantryInventory from './PantryInventory'
import ExpirationItems from './expiration'


// icons
import fridge from '../images/fridge.png';
import pantry from '../images/pantry.png';
import plus from '../images/plus.png'
import garbageCan from '../images/garbagecan.png'
import oven from '../images/oven.png'
import grocery from '../images/grocery.jpg'



export class Dashboard extends React.Component {
  componentWillMount(){
    this.props.dispatch(clearErrorMessage())
    this.props.dispatch(fetchFridgeInventory())
    this.props.dispatch(fetchPantryInventory())
  }


  render() {
    
    return (
      
      <section className="Dashboard">
          <nav className="App-header">
            <Link className="Fridge-logo" to="/fridge"><img src={fridge}  alt="logo" /></Link>
            <Link className="Pantry-logo" to ="/pantry"><img src={pantry}  alt="logo" /></Link>
            <Link className="Recipe-logo" to="/recipe"><img src={oven} alt ="oven"/></Link>
            <Link className="Garbagecan-logo"to="/dashboard"><img src={garbageCan} alt ='garbage'/></Link>
            <Link className="Add-logo" to="/add"><img src={plus} alt ='add'/></Link>
          </nav>
      <main>
        <Route  path='/fridge' component={FridgeInventory}/>
        <Route  path='/pantry' component={PantryInventory}/>
        <Route  path ='/add' component={AddForm} />
        <Route  path ='/recipe' component={RecipeViewer} />
        <Route exact path ='/' component = {FridgeInventory} />
        <Route exact path ='/dashboard' component = {ExpirationItems} />
      </main>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      isLoading: state.food.isLoading
      
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard))
