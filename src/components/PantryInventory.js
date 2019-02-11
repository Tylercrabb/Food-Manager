import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Link} from 'react-router-dom';
import plus from '../images/baseline_add_black_18dp.png'
import {AddForm} from  './addForm'
import {fetchPantryInventory, deletePantryItem, clearErrorMessage, setAdding} from '../actions/'
// import './inventory.css'
 class PantryInventory extends Component{
    
    componentDidMount(){
        this.props.dispatch(fetchPantryInventory())
        this.props.dispatch(clearErrorMessage())
        this.props.dispatch(setAdding('pantry'))
    }


    render() {
        if(this.props.PantryInventory.length === 0){
            return (
            <div className = "Inventory-List">
            <h3 className ="view">My Pantry</h3>
            <ul className ='item-list'>
            <div className ="list-item">
            <li className = "item-name" >Looks like your pantry is empty, lets add some items!</li>
            </div>
            </ul>
            </div>)
        }
        
        let lists = this.props.PantryInventory.map((item, index) => {
            return (<div className = "list-item">
                <li className = "item-name" key={item.id}>{item.itemName}</li>
                <p className = "expiration-date">This expires: {item.expirationDate.split('T')[0].split('-').slice(1).join('-')}</p>
                <button className="delete-button"
                key={index}
                onClick={e => {
                    this.props.dispatch(deletePantryItem(item))
                }}
                >Delete</button>
                </div>)
        });
        
        return (
        <div className ="Inventory-List">
        <h3 className ="view">My Pantry
        </h3>
        
        <ul className ='item-list'>{lists}</ul>
        <Route  path ='/add' component={AddForm} />
        </div>
    )}
}

const mapStateToProps = state => ({
    PantryInventory:state.food.pantryInventory
})

export default connect(mapStateToProps)(PantryInventory);
