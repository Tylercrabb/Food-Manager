import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPantryInventory, deletePantryItem} from '../actions/'
import './inventory.css'
 class PantryInventory extends Component{
    componentDidMount(){
        this.props.dispatch(fetchPantryInventory())
    }


    render() {
        let lists = this.props.PantryInventory.map((item, index) => {
            return (<div className = "list-item">
                <li className = "item-name" key={item.id}>{item.itemName}</li>
                <p className = "expiration-date">This will expire on: {item.expirationDate.split('T')[0]}</p>
                <button className="delete-button"
                key={index}
                onClick={e => {
                    this.props.dispatch(deletePantryItem(item))
                }}
                >Delete</button>
                </div>)
        });
        return (
        <div className ="Inventory-List"><h3>My Pantry</h3><ul className ='item-list'>{lists}</ul></div>
        
    )}
}

const mapStateToProps = state => ({
    PantryInventory:state.food.pantryInventory
})

export default connect(mapStateToProps)(PantryInventory);
