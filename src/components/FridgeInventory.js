import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchFridgeInventory, deleteFridgeItem, clearErrorMessage} from '../actions/'
import grocery from '../images/grocery.jpg'
 
class FridgeInventory extends Component{
    
    componentDidMount(){
        this.props.dispatch(fetchFridgeInventory())  
        this.props.dispatch(clearErrorMessage())
    }


    render() {
        let lists = this.props.fridgeInventory.map((item,index) => {
            return (
                <div className ="list-item">
                <li className = "item-name" key={item.id}>{item.itemName}</li>
                <p className = "expiration-date">This will expire on: {item.expirationDate.split('T')[0]}</p>
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
        <div className = "Inventory-List">
        <h3 className ="view">My Fridge</h3>
        <img className="fridge-image" src={grocery} alt="pretty pantry"/>
        <ul className ='item-list'>{lists}</ul>
        </div>
    )}
}

const mapStateToProps = state => ({
    fridgeInventory:state.food.fridgeInventory
})

export default connect(mapStateToProps)(FridgeInventory);

