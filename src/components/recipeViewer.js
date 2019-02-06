import React from 'react';
import {connect} from 'react-redux';
import {fetchPantryInventory, fetchFridgeInventory, getRecipes} from '../actions'
 export class RecipeViewer extends React.Component{
    componentDidMount(){
        this.props.dispatch(fetchPantryInventory())
        this.props.dispatch(fetchFridgeInventory())
    }
     

    render() {
        let recipeDisplay = this.props.recipes.map((recipe, index) =>{
            // build url to display link to recipe
            let baseURL = 'https://spoonacular.com/recipes/'
            let id = recipe.id;
            let name = recipe.title.replace(/ /g, '-')
            
            return (<div>
            <li key={recipe.id}>{recipe.id} {recipe.title}<img className='recipe-picture'  alt={recipe.title} src = {recipe.image}/></li>
                <a target="_blank" rel="noopener noreferrer" href= {`${baseURL}${name}-${id}`}>Check out this recipe on spoonacular</a>
            </div>)

        })
        return (
        <div>
        <ul>{recipeDisplay}</ul>
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
    recipes: state.food.recipes
});

export default connect(mapStateToProps)(RecipeViewer);

