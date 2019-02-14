import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchFridgeInventory, deleteFridgeItem, clearErrorMessage, setAdding} from '../actions/'

 
 export class FridgeInventory extends Component{
    
    componentDidMount(){
        this.props.dispatch(fetchFridgeInventory())  
        this.props.dispatch(clearErrorMessage())
        this.props.dispatch(setAdding('fridge'))
    }


    render() {
        if(this.props.fridgeInventory.length === 0){
            return (
            <div className = "Inventory-List">
                <h3 className ="view">My Fridge</h3>
                <ul className ='item-list'>
                    <div className ="list-item">
                        <li className = "item-name" >Looks like your fridge is empty, lets add some items!</li>
                    </div>
                </ul>
            </div>)
        }
        let lists = this.props.fridgeInventory.map((item,index) => {
            return (
                <div className ="list-item" key = {index}>
                    <li className = "item-name" key={item.id}>{item.itemName}</li>
                    <p className = "expiration-date">This will expire on: {item.expirationDate.split('T')[0].split('-').slice(1).join('-')}</p>
                    <button 
                        key={index}
                        onClick={e => {
                        this.props.dispatch(deleteFridgeItem(item))}}>
                        Delete
                    </button>
                </div>)
        });
        
       
        return (
        <div className = "Inventory-List">
            <h3 className ="view">My Fridge</h3>
            <ul className ='item-list'>{lists}</ul>
        </div>
    )}
}

const mapStateToProps = state => ({
    fridgeInventory:state.food.fridgeInventory
})

export default connect(mapStateToProps)(FridgeInventory);

