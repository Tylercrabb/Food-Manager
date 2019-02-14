import {fetchPantryInventory, fetchFridgeInventory, getRecipes, clearRecipes, clearErrorMessage, loading, stopLoading} from '../actions'
import React from 'react';
import {connect} from 'react-redux';
import '../recipe.css'
const shuffle = require('shuffle-array');
 export class RecipeViewer extends React.Component{
    componentWillMount(){
        this.props.dispatch(loading())
    }
    componentDidMount(){
        this.props.dispatch(fetchPantryInventory())
        this.props.dispatch(fetchFridgeInventory())
        this.props.dispatch(stopLoading())
        this.props.dispatch(clearErrorMessage())
        this.props.dispatch(getRecipes())
    }

    componentWillUnmount(){
        this.props.dispatch(clearRecipes())
        this.props.dispatch(clearErrorMessage())
        this.props.dispatch(stopLoading())
    }
     

    render() {
        let recipeDisplay = this.props.recipes.map((recipe) =>{
            // build url to display link to recipe
            let baseURL = 'https://spoonacular.com/recipes/'
            let id = recipe.id;
            let name = recipe.title.replace(/ /g, '-')
            return (
            <div id = {recipe.id} className ="recipe-card">
            <img className='recipe-picture'  alt={recipe.title} src = {recipe.image}/>
            <li className = "item-name" key={recipe.id}>{recipe.title}</li>
            <a className ="recipe-link" target="_blank" rel="noopener noreferrer" href= {`${baseURL}${name}-${id}`}>Check out this recipe on spoonacular</a>
            </div> )
        })
        return (
        <div className="Inventory-List" >
        <h3 className ="view">Lets get cooking</h3>
        <ul className='recipe-list' >{recipeDisplay}</ul>
        </div>
    )
}
 }



const mapStateToProps = state => ({
    pantryInventory: state.food.pantryInventory,
    fridgeInventory: state.food.fridgeInventory,
    recipes: state.food.recipes,
    errorMessage: state.food.errorMessage
});

export default connect(mapStateToProps)(RecipeViewer);

