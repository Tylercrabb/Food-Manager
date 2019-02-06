import {FETCH_FRIDGE_SUCCESS, FETCH_PANTRY_SUCCESS, DELETE_PANTRY_ITEM_SUCCESS, DELETE_FRIDGE_ITEM_SUCCESS, GET_RECIPES_SUCCESS, GET_RECIPE_ID, GET_RECIPE_NAME} from '../actions'
const initialState = {
    fridgeInventory:[],
    pantryInventory:[],
    recipes:[],
   
}

export const fridgeReducer = (state=initialState, action) => {
 if (action.type === FETCH_FRIDGE_SUCCESS){
     
    return Object.assign({}, state, {
        fridgeInventory:  action.items
    })
 }
else if(action.type === FETCH_PANTRY_SUCCESS){
    return Object.assign({}, state, {
        pantryInventory:  action.items
    })
}
else if(action.type === DELETE_PANTRY_ITEM_SUCCESS){
    return Object.assign({}, state, {
        pantryInventory:  state.pantryInventory.filter(item => item.id !== action.items)
    })
}
else if(action.type === DELETE_FRIDGE_ITEM_SUCCESS){
    return Object.assign({}, state, {
        fridgeInventory:  state.fridgeInventory.filter(item => item.id !== action.items)
    })
}
else if(action.type === GET_RECIPES_SUCCESS){
    return Object.assign({}, state, {
        recipes:action.results
    })
}

return state
}