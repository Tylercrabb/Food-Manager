import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPantryInventory, deletePantryItem} from '../actions/'

 class PantryInventory extends Component{
    componentDidMount(){
        this.props.dispatch(fetchPantryInventory())
    }


    render() {
        let lists = this.props.PantryInventory.map((item, index) => {
            return (<div>
                <li key={item.id}>{item.itemName}{item.expirationDate}</li>
                <button 
                key={index}
                onClick={e => {
                    this.props.dispatch(deletePantryItem(item))
                }}
                >Delete</button>
                </div>)
        });
        return (
        <div><ul>{lists}</ul></div>
        
    )}
}

const mapStateToProps = state => ({
    PantryInventory:state.food.pantryInventory
})

export default connect(mapStateToProps)(PantryInventory);
