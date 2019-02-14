import {FETCH_FRIDGE_SUCCESS, FETCH_PANTRY_SUCCESS, DELETE_PANTRY_ITEM_SUCCESS, DELETE_FRIDGE_ITEM_SUCCESS, GET_RECIPES_SUCCESS, 
    SET_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE, 
    CLEAR_RECIPES, LOADING, STOP_LOADING, SET_ADDING, SET_EXPIRING_ITEMS, CLEAR_EXPIRING_ITEMS, CLEAR_FRIDGE_INVENTORY, CLEAR_PANTRY_INVENTORY} from '../actions'


    const initialState = {
    fridgeInventory:[],
    pantryInventory:[],
    soonToExpire: [],
    recipes:[],
    errorMessage: null,
    isLoading: false,
    addingTo: "fridge",
    
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
        errorMessage: null
    })
}

else if(action.type === CLEAR_RECIPES){
    return Object.assign({}, state, {
        recipes:[]
    })
}
else if(action.type === LOADING){
    return Object.assign({}, state, {
        isLoading: true
    })
}
else if(action.type === STOP_LOADING){
    return Object.assign({}, state, {
        isLoading: false
    })
}

else if(action.type === SET_ADDING){
    return Object.assign({}, state, {
        addingTo: action.addTo
    })
}

else if(action.type === SET_EXPIRING_ITEMS){
    return Object.assign({}, state, {
        soonToExpire: action.items
    })
}

else if(action.type === CLEAR_EXPIRING_ITEMS){
    return Object.assign({}, state, {
        soonToExpire: []
    })
}

else if(action.type === CLEAR_FRIDGE_INVENTORY){
    return Object.assign({}, state, {
        fridgeInventory:[]
    })
}

else if(action.type === CLEAR_PANTRY_INVENTORY){
    return Object.assign({}, state, {
        pantryInventory:[]
    })
}
return state
}