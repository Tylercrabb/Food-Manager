import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchFridgeInventory, deleteFridgeItem} from '../actions/'

 class FridgeInventory extends Component{
    componentDidMount(){
        this.props.dispatch(fetchFridgeInventory())  
    }


    render() {
        let lists = this.props.fridgeInventory.map((item,index) => {
            return (<div>
                <li key={item.id}>{item.itemName}{item.expirationDate}</li>
                <button 
                key={index}
                onClick={e => {
                    this.props.dispatch(deleteFridgeItem(item))
                    // .then(() => this.props.dispatch(fetchFridgeInventory()))
                }}
                >Delete</button>
                </div>)
        });
        return (
        <p><ul>{lists}</ul></p>
    )}
}

const mapStateToProps = state => ({
    fridgeInventory:state.fridge.fridgeInventory
})

export default connect(mapStateToProps)(FridgeInventory);

