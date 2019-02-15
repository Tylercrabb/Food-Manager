import React from 'react';
import {shallow, mount} from 'enzyme';
import {loading, fetchFridgeInventory, fetchPantryInventory} from '../actions/index'
import {clearErrorMessage, clearExpiringItems} from '../actions'
import Enzyme from 'enzyme';
import {Dashboard} from './dashboard';
import './setupTests'






describe('<Dashboard />', () => {
    const dispatch = jest.fn();

    it('Renders without crashing', () => {
        shallow(<Dashboard dispatch= {dispatch}/>);
    });

    // it('the page correctly renders all links and routes', () => {
    //     const wrapper = shallow(<Dashboard dispatch={dispatch}/>);
    //     expect(wrapper).toMatchSnapshot()
    // });

    it('calls the life cycle methods when mounted', () => {
        const testLifeCycle = jest.fn();
        const wrapper = shallow(<Dashboard dispatch = {testLifeCycle}/>);
        expect(testLifeCycle.mock.calls.length).toBe(3);
    })

});



// expect(wrapper.find('').length).toEqual(1)