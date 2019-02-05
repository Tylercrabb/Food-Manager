export const FETCH_FRIDGE_SUCCESS = 'FETCH_FRIDGE_SUCCESS';

export const fetchFridgeSuccess = items => ({
    type: FETCH_FRIDGE_SUCCESS,
    items
});

export const fetchFridgeInventory = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
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
            
        });
    }

export const FETCH_PANTRY_SUCCESS = 'FETCH_PANTRY_SUCCESS';

export const fetchPantrySuccess = items => ({
    type: FETCH_PANTRY_SUCCESS,
    items
});

export const fetchPantryInventory = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`https://fridgeapp-backend.herokuapp.com/api/pantry`, {
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
            dispatch(fetchPantrySuccess(items));
            
        });
    }

