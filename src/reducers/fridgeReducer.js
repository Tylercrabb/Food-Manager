import {FETCH_FRIDGE_SUCCESS, FETCH_PANTRY_SUCCESS, DELETE_PANTRY_ITEM_SUCCESS, DELETE_FRIDGE_ITEM_SUCCESS} from '../actions'
const initialState = {
    fridgeInventory:[],
    pantryInventory:[]
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
    console.log(action.items)
    return Object.assign({}, state, {
        pantryInventory:  state.pantryInventory.filter(item => item.id !== action.items)
    })
}
else if(action.type === DELETE_FRIDGE_ITEM_SUCCESS){
    return Object.assign({}, state, {
        fridgeInventory:  state.fridgeInventory.filter(item => item.id !== action.items)
    })
}
return state
}