export const FETCH_FRIDGE_SUCCESS = 'FETCH_FRIDGE_SUCCESS';

export const fetchFridgeSuccess = items => ({
    type: FETCH_FRIDGE_SUCCESS,
    items
});

export const fetchFridgeInventory = () => dispatch => {
    fetch(`https://fridgeapp-backend.herokuapp.com/api/item`)
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