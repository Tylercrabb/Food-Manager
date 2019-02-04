import {FETCH_FRIDGE_SUCCESS} from '../actions'
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

return state
}