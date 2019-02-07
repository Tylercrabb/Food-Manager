import React from 'react';
import {connect} from 'react-redux';
import '../recipe.css'
import {fetchPantryInventory, fetchFridgeInventory, getRecipes, clearRecipes, setErrorMessage, clearErrorMessage} from '../actions'
 export class RecipeViewer extends React.Component{
    componentDidMount(){
        this.props.dispatch(fetchPantryInventory())
        this.props.dispatch(fetchFridgeInventory())
    }

    componentWillUnmount(){
        this.props.dispatch(clearRecipes())
        this.props.dispatch(clearErrorMessage())
    }
     

    render() {
        let recipeDisplay = this.props.recipes.map((recipe, index) =>{
            // build url to display link to recipe
            let baseURL = 'https://spoonacular.com/recipes/'
            let id = recipe.id;
            let name = recipe.title.replace(/ /g, '-')
            
            return (<div className ="list-item">
                <img className='recipe-picture'  alt={recipe.title} src = {recipe.image}/>
            <li className = "item-name" key={recipe.id}>{recipe.title}</li>
                <a target="_blank" rel="noopener noreferrer" href= {`${baseURL}${name}-${id}`}>Check out this recipe on spoonacular</a>
            </div>)

        })
        return (
        <div className="Inventory-List" >
        <p>{this.props.errorMessage}</p>
        <ul className='item-list' >{recipeDisplay}</ul>
        <button
        onClick={() => this.props.dispatch(getRecipes())
        }
        >get recipes</button>
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

