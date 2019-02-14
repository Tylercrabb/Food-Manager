import React from 'react';
import {shallow, mount} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {PantryInventory } from './PantryInventory';
import './setupTests'

describe('<PantryInventory />', () => {
    const dispatch = jest.fn();
    const sampleInventory =[{'itemName': 'cheese', 'expirationDate': '2019-12-12'}, {'itemName': 'yogurt', 'expirationDate': '2019-12-12'}]
    
    it('Renders without crashing', () => {
        shallow(<PantryInventory dispatch ={dispatch} PantryInventory = {sampleInventory}/>);

    });

    it('Renders a list containing the items in the pantryInventory', () => {
        const wrapper = mount(<PantryInventory dispatch = {dispatch} PantryInventory ={sampleInventory} />);
        expect(wrapper.find(".item-name").length).toEqual(2);
        expect(wrapper.find(".expiration-date").length).toEqual(2);
        
    });

    it('Should call dispatch 3 times on component mount', () => {
        const testLifeCycle = jest.fn();
        const wrapper = mount(<PantryInventory dispatch={testLifeCycle} PantryInventory = {sampleInventory} />)
        expect(testLifeCycle.mock.calls.length).toBe(3);
    })

    it('Should only render the empty message when no items are passed in to the pantry inventory', () => {
      const emptyPantry = [];
        const wrapper = mount(<PantryInventory dispatch = {dispatch} PantryInventory ={emptyPantry} />);
        expect(wrapper.find(".item-name").length).toEqual(1);
    })
});

// expect(wrapper.find('').length).toEqual(1)