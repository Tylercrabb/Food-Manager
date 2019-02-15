import React from 'react';
import {shallow, mount} from 'enzyme';
import {ExpirationItems} from './expiration';
import './setupTests'

describe('<ExpirationItems', () => {
    const dispatch = jest.fn();
    const soonToExpire =[{'itemName': 'cheese', 'expirationDate': '2019-12-12'}, {'itemName': 'yogurt', 'expirationDate': '2019-02-16'}]

    it('Renders without crashing', () => {
        shallow(<ExpirationItems dispatch ={dispatch} soonToExpire = {soonToExpire}/>);
    });

    it('Renders a list containing the items in the soon to expire array', () => {
        const wrapper = mount(<ExpirationItems dispatch = {dispatch} soonToExpire ={soonToExpire} />);
        expect(wrapper.find(".item-name").length).toEqual(2);
        expect(wrapper.find(".expiration-date").length).toEqual(2);
        
    });

    it('Should call dispatch 3 times on component mount', () => {
        const testLifeCycle = jest.fn();
        const wrapper = mount(<ExpirationItems dispatch={testLifeCycle} soonToExpire = {soonToExpire} />)
        expect(testLifeCycle.mock.calls.length).toBe(2);
    })

    it('Should only render the empty message when no items are passed in to the soon to expire array', () => {
      const emptyExpiry = [];
        const wrapper = mount(<ExpirationItems dispatch = {dispatch} soonToExpire ={emptyExpiry} />);
        expect(wrapper.find(".item-name").length).toEqual(1);
    })
});

// test
