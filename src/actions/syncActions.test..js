import {CLEAR_RECIPES, clearRecipes, SET_ERROR_MESSAGE, setErrorMessage,
CLEAR_ERROR_MESSAGE, clearErrorMessage, LOADING, loading, STOP_LOADING, stopLoading,
SET_ADDING, setAdding, SET_EXPIRING_ITEMS, setExpiringItems, CLEAR_EXPIRING_ITEMS, 
clearExpiringItems, CLEAR_PANTRY_INVENTORY, clearPantryInventory, CLEAR_FRIDGE_INVENTORY
, clearFridgeInventory} from './index'


describe('clearRecipes', () => {
    it('should return the action', () => {
        const action = clearRecipes();
        expect(action.type).toEqual(CLEAR_RECIPES)
    })
});

describe('setErrorMessage', () => {
    it('should return the action', ()=> {
        const myError = 'foo error'
        const action = setErrorMessage(myError);
        expect(action.type).toEqual(SET_ERROR_MESSAGE);
        expect(action.errorMessage).toEqual(myError);
    })
});

describe('clearErrorMessage', () => {
    it('should return the action', () => {
        const action = clearErrorMessage();
        expect(action.type).toEqual(CLEAR_ERROR_MESSAGE)
    })
});

describe('loading', () => {
    it('should return the action', () => {
        const myFlip = 'flip';
        const action= loading(myFlip);
        expect(action.type).toEqual(LOADING);
        expect(action.flip).toEqual(myFlip)
    })
});

describe('stopLoading', () => {
    it('should return the action', () => {
        const myFlip = 'flip';
        const action= stopLoading(myFlip);
        expect(action.type).toEqual(STOP_LOADING);
        expect(action.flip).toEqual(myFlip)
    })
});

describe('setAdding', () => {
    it('should return the action', () => {
        const myAddTo = 'test';
        const action= setAdding(myAddTo)
        expect(action.type).toEqual(SET_ADDING);
        expect(action.addTo).toEqual(myAddTo)
    })
});

describe('setExpiringItems', () => {
    it('should return the action', () => {
        const myItems = 'test';
        const action= setExpiringItems(myItems)
        expect(action.type).toEqual(SET_EXPIRING_ITEMS);
        expect(action.items).toEqual(myItems)
    })
});

describe('clearExpiringItems', () => {
    it('should return the action', () => {
        const myItems = 'test';
        const action= clearExpiringItems(myItems)
        expect(action.type).toEqual(CLEAR_EXPIRING_ITEMS);
        expect(action.items).toEqual(myItems)
    })
});

describe('clearPantryInventory', () => {
    it('should return the action', () => {
        const action = clearPantryInventory();
        expect(action.type).toEqual(CLEAR_PANTRY_INVENTORY)
    })
});

describe('clearFridgeInventory', () => {
    it('should return the action', () => {
        const action = clearFridgeInventory();
        expect(action.type).toEqual(CLEAR_FRIDGE_INVENTORY)
    })
});
