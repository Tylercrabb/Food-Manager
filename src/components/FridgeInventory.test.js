import React from 'react';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {FridgeInventory} from './FridgeInventory';
import './setupTests'

describe('<FridgeInventory />', () => {
    const dispatch = jest.fn();
    const fridgeInventory =[{'itemName': 'cheese', 'expirationDate': '2019-12-12'}, {'itemName': 'yogurt', 'expirationDate': '2019-12-12'}]
    
    it('Renders without crashing', () => {
        shallow(<FridgeInventory dispatch ={dispatch} fridgeInventory = {fridgeInventory}/>);

    });

    it('Renders a list containing the items in the fridgeInventory', () => {
        const wrapper = mount(<FridgeInventory dispatch = {dispatch} fridgeInventory ={fridgeInventory} />);
        expect(wrapper.find(".item-name").length).toEqual(2);
        expect(wrapper.find(".expiration-date").length).toEqual(2);
        
    });

    it('Should call dispatch 3 times on component mount', () => {
        const testLifeCycle = jest.fn();
        const wrapper = mount(<FridgeInventory dispatch={testLifeCycle} fridgeInventory = {fridgeInventory} />)
        expect(testLifeCycle.mock.calls.length).toBe(3);
    })

    it('Should only render the empty message when no items are passed in to the fridge inventory', () => {
      const emptyFridge = [];
        const wrapper = mount(<FridgeInventory dispatch = {dispatch} fridgeInventory ={emptyFridge} />);
        expect(wrapper.find(".item-name").length).toEqual(1);
    })
});

// expect(wrapper.find('').length).toEqual(1)