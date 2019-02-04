import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchFridgeInventory} from '../actions/'

 class FridgeInventory extends Component{
    componentDidMount(){
        this.props.dispatch(fetchFridgeInventory())  
    }


    render() {
        let lists = this.props.fridgeInventory.map(item => {
            return <li key={item.id}>{item.itemName}{item.expirationDate}</li>
        });
        return (
        <h1><ul>{lists}</ul></h1>
    )}
}

const mapStateToProps = state => ({
    fridgeInventory:state.fridge.fridgeInventory
})

export default connect(mapStateToProps)(FridgeInventory);

