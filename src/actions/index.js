 import {API_KEY} from '../config'
 
export const FETCH_FRIDGE_SUCCESS = 'FETCH_FRIDGE_SUCCESS';

export const fetchFridgeSuccess = items => ({
    type: FETCH_FRIDGE_SUCCESS,
    items
});

export const fetchFridgeInventory = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(loading());
    return fetch(`https://fridgeapp-backend.herokuapp.com/api/item`,{
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })

        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(items => {
            dispatch(fetchFridgeSuccess(items));
            dispatch(stopLoading())
        });
    }

export const FETCH_PANTRY_SUCCESS = 'FETCH_PANTRY_SUCCESS';

export const fetchPantrySuccess = items => ({
    type: FETCH_PANTRY_SUCCESS,
    items
});

export const fetchPantryInventory = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(loading())
    return fetch(`https://fridgeapp-backend.herokuapp.com/api/pantry`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
        return res.json()
        })
        .then(items => {
            dispatch(fetchPantrySuccess(items));
            dispatch(stopLoading())
        });
    }

export const DELETE_PANTRY_ITEM_SUCCESS = 'DELETE_PANTRY_ITEM_SUCCESS';

export const deletePantryItemSuccess = items => ({
    type: DELETE_PANTRY_ITEM_SUCCESS,
    items
});

    export const deletePantryItem = (item) => (dispatch, getState) => {
        const authToken = getState().auth.authToken;
        
        return fetch(`https://fridgeapp-backend.herokuapp.com/api/pantry/${item.id}`, {
            method: 'DELETE',
            headers: {
                // Provide our auth token as credentials
                Authorization: `Bearer ${authToken}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res
            })
            .then( ()=> {
                dispatch(deletePantryItemSuccess(item.id));
            })
        }
        

export const DELETE_FRIDGE_ITEM_SUCCESS = 'DELETE_FRIDGE_ITEM_SUCCESS';

export const deleteFridgeItemSuccess = items => ({
    type: DELETE_FRIDGE_ITEM_SUCCESS,
    items
});

    export const deleteFridgeItem = (item) => (dispatch, getState) => {
        const authToken = getState().auth.authToken;
        
       return fetch(`https://fridgeapp-backend.herokuapp.com/api/item/${item.id}`, {
            method: 'DELETE',
            headers: {
                // Provide our auth token as credentials
                Authorization: `Bearer ${authToken}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                
            })
            .then( ()=> {
                dispatch(deleteFridgeItemSuccess(item.id));
            })
        }

export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';

export const getRecipeSuccess = results => ({
    type: GET_RECIPES_SUCCESS,
    results
});

    export const getRecipes = () => (dispatch, getState) => {
        function getNames(arr){
            let results = [];
            for(let i = 0; i < arr.length; i++){
                results.push(arr[i].itemName)
            }return results
        }
        let fridgeInvNames = getNames(getState().food.fridgeInventory) 
        let pantryInvNames = getNames(getState().food.pantryInventory) 
        let totalInv = fridgeInvNames.concat(pantryInvNames);
        let query = totalInv.join('%2C');
        dispatch(loading())
       return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=${query}`, {
            method: 'GET',
            
            headers: {
                'X-RapidAPI-Key': API_KEY
            }
        })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json()
            })
            .then( results => {
                if(results.length < 1){
                    dispatch(setErrorMessage('Oh no! No recipes found using your inventory!'))
                }
                dispatch(getRecipeSuccess(results))
                dispatch(stopLoading())
            })
        }


export const CLEAR_RECIPES ='CLEAR_RECIPES'

export const clearRecipes = () => ({
    type: CLEAR_RECIPES
})


export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export const setErrorMessage = errorMessage => ({
    type: SET_ERROR_MESSAGE,
    errorMessage
});

export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';

export const clearErrorMessage = errorMessage => ({
    type: CLEAR_ERROR_MESSAGE,
    errorMessage
});

export const LOADING = 'LOADING';

export const loading = flip => ({
    type: LOADING,
    flip
});

export const STOP_LOADING = 'STOP_LOADING';

export const stopLoading = flip => ({
    type: STOP_LOADING,
    flip
});

export const SET_ADDING = 'SET_ADDING';

export const setAdding = addTo => ({
    type: SET_ADDING,
    addTo
})
            
export const SET_EXPIRING_ITEMS = 'SET_EXPIRING_ITEMS';

export const setExpiringItems = items => ({
    type: SET_EXPIRING_ITEMS,
    items
})

export const CLEAR_EXPIRING_ITEMS = 'CLEAR_EXPIRING_ITEMS';

export const clearExpiringItems = items => ({
    type: CLEAR_EXPIRING_ITEMS,
    items
})
           