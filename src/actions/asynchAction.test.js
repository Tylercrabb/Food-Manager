import {fetchFridgeSuccess, fetchFridgeInventory, loading, stopLoading, setErrorMessage, 
fetchPantrySuccess, fetchPantryInventory, deletePantryItemSuccess, deletePantryItem, deleteFridgeItemSuccess,
deleteFridgeItem, getRecipeSuccess, getRecipes} from './index'

describe('fetchFridgeInventory', () => {
    const sampleInventory =[{'itemName': 'cheese', 'expirationDate': '2019-12-12'}]
    it('Should dispatch fetchFridgeSuccess', () => {
        global.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({
                ok: true,
                json(){
                    return Promise.resolve(sampleInventory);
                }
            })
        );

         const getState = () => {
            const state = {auth: {
                authToken: '182863871263012631263'
            }}
            return state;
        }

        const dispatch = jest.fn();
        
        const thunky = fetchFridgeInventory();

        return thunky(dispatch, getState).then(() => {
            expect(fetch).toHaveBeenCalledWith(`https://fridgeapp-backend.herokuapp.com/api/item`, 
            {headers: {Authorization: 'Bearer 182863871263012631263'}} );
            expect(dispatch.mock.calls[0][0]).toEqual(loading());
            expect(dispatch.mock.calls[1][0]).toEqual(fetchFridgeSuccess(sampleInventory));
            expect(dispatch.mock.calls[2][0]).toEqual(stopLoading());
            
        })
    })
})

describe('fetchPantryInventory', () => {
    const sampleInventory =[{'itemName': 'cheese', 'expirationDate': '2019-12-12'}]
    it('Should dispatch fetchPantrySuccess', () => {
        global.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({
                ok: true,
                json(){
                    return Promise.resolve(sampleInventory);
                }
            })
        );

         const getState = () => {
            const state = {auth: {
                authToken: '182863871263012631263'
            }}
            return state;
        }

        const dispatch = jest.fn();
        
        const thunky = fetchPantryInventory();

        return thunky(dispatch, getState).then(() => {
            expect(fetch).toHaveBeenCalledWith(`https://fridgeapp-backend.herokuapp.com/api/pantry`, 
            {headers: {Authorization: 'Bearer 182863871263012631263'}} );
            expect(dispatch.mock.calls[0][0]).toEqual(loading());
            expect(dispatch.mock.calls[1][0]).toEqual(fetchPantrySuccess(sampleInventory));
            expect(dispatch.mock.calls[2][0]).toEqual(stopLoading());
            
        })
    })
})

