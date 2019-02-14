import {fridgeReducer} from './fridgeReducer'
import '../components/setupTests'
import {fetchFridgeSuccess, fetchPantrySuccess, deleteFridgeItemSuccess ,deletePantryItemSuccess, getRecipeSuccess, 
    setErrorMessage, clearErrorMessage, 
    clearRecipes, loading, stopLoading, setAdding, clearExpiringItems, clearFridgeInventory, clearPantryInventory} from '../actions'

    // const initialState = {
    //     fridgeInventory:[],
    //     pantryInventory:[],
    //     soonToExpire: [],
    //     recipes:[],
    //     errorMessage: null,
    //     isLoading: false,
    //     addingTo: "fridge",
    // }
    
    describe('reducer', () => {
        it('should set the initial state when nothing is passed in', () => {
            const state = fridgeReducer(undefined, {})

            expect(state).toEqual(
                {fridgeInventory:[],
                pantryInventory:[],
                soonToExpire: [],
                recipes:[],
                errorMessage: null,
                isLoading: false,
                addingTo: "fridge",})
        })

        it('should handle the addFridgeInventoryAction', () => {
            let initialState = { fridgeInventory: []};

            const state = fridgeReducer(initialState, 
            fetchFridgeSuccess({itemName: 'cheese', expirationDate: '2019-12-12'}))

            expect(state).toEqual({fridgeInventory:{itemName: 'cheese', expirationDate: '2019-12-12'}})
        })

        it('should handle the addPantryInventoryAction', () => {
            let initialState = { pantryInventory: []};

            const state = fridgeReducer(initialState, 
            fetchPantrySuccess({itemName: 'bread', expirationDate: '2019-12-12'}))

            expect(state).toEqual({pantryInventory:{itemName: 'bread', expirationDate: '2019-12-12'}})
        })

        it('should handle the deletePantryItem action', () => {
            let initialState = { pantryInventory: [{id:'1', itemName: 'bread', expirationDate: '2019-12-12' }]};

            const state = fridgeReducer(initialState, 
            deletePantryItemSuccess('1'))

            expect(state).toEqual({pantryInventory: []})
        })

        it('should handle the deleteFridgeItem action', () => {
            let initialState = { fridgeInventory: [{id:'1', itemName: 'cheese', expirationDate: '2019-12-12' }]};

            const state = fridgeReducer(initialState, 
            deleteFridgeItemSuccess('1'))

            expect(state).toEqual({fridgeInventory: []})
        })

        it('should handle the getRecipes action', () => {
            let initialState = {recipes: []};

            const state = fridgeReducer(initialState, 
                getRecipeSuccess({recipe: 'toast', ingredients: 'bread'}));

            expect(state).toEqual({recipes: {recipe: 'toast', ingredients: 'bread'}})
        })

        it('should handle the setErrorMessage action', () => {
            let initialState = {errorMessage: null}

            const state = fridgeReducer(initialState, setErrorMessage('test'));
            expect(state).toEqual({errorMessage: 'test'});
        })

        it('should handle the clearError action', () => {
            let initialState = {errorMessage: 'test'}

            const state = fridgeReducer(initialState, clearErrorMessage());
            expect(state).toEqual({errorMessage: null});
        })

        it('should handle the clearRecipes action', () => {
            let initialState = {recipes: [{name: 'toast', ingredients: 'bread'}]}
            const state = fridgeReducer(initialState, clearRecipes());
            expect(state).toEqual({recipes: []})
        })

        it('should handle the loading action', () => {
            let initialState = { isLoading: false}
            const state = fridgeReducer(initialState, loading())
            expect(state).toEqual({isLoading: true})
        })

        it('should handle the stopLoading action', () => {
            let initialState = { isLoading: true}
            const state = fridgeReducer(initialState, stopLoading())
            expect(state).toEqual({isLoading: false})
        })

        it('should handle the setAdding action', () => {
            let initialState = { addingTo: 'test'}
            const state = fridgeReducer(initialState, setAdding('pantry'))
            expect(state).toEqual({addingTo: 'pantry'})
        })

        it('should handle the clearFridge action', () => {
            let initialState = { fridgeInventory: [{id:'1', itemName: 'cheese', expirationDate: '2019-12-12' }]};
            const state = fridgeReducer(initialState, clearFridgeInventory())
            expect(state).toEqual({fridgeInventory: []})
        })

        it('should handle the clearPantry action', () => {
            let initialState = { pantryInventory: [{id:'1', itemName: 'cheese', expirationDate: '2019-12-12' }]};
            const state = fridgeReducer(initialState, clearPantryInventory())
            expect(state).toEqual({pantryInventory: []})
        })

        it('should handle the clearExpiring action', () => {
            let initialState = { soonToExpire: [{id:'1', itemName: 'cheese', expirationDate: '2019-12-12' }]};
            const state = fridgeReducer(initialState, clearExpiringItems())
            expect(state).toEqual({soonToExpire: []})
        })
    })

        