import {FETCH_FRIDGE_SUCCESS, FETCH_PANTRY_SUCCESS} from '../actions'
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
return state
}