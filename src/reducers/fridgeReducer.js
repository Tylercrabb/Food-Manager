import {FETCH_FRIDGE_SUCCESS, FETCH_PANTRY_SUCCESS, DELETE_PANTRY_ITEM_SUCCESS, DELETE_FRIDGE_ITEM_SUCCESS, GET_RECIPES_SUCCESS, SET_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE, CLEAR_RECIPES} from '../actions'
const initialState = {
    fridgeInventory:[],
    pantryInventory:[],
    recipes:[],
    errorMessage:''
   
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
else if(action.type === SET_ERROR_MESSAGE){
    return Object.assign({}, state, {
        errorMessage: action.errorMessage
    })
}

else if(action.type === CLEAR_ERROR_MESSAGE){
    return Object.assign({}, state, {
        errorMessage: ''
    })
}

else if(action.type === CLEAR_RECIPES){
    return Object.assign({}, state, {
        recipes:[]
    })
}
return state
}