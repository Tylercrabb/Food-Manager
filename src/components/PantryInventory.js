import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPantryInventory} from '../actions/'

 class PantryInventory extends Component{
    componentDidMount(){
        this.props.dispatch(fetchPantryInventory())
        console.log(this.props)
    }


    render() {
        console.log(this.props)
        let lists = this.props.PantryInventory.map(item => {
            return <li key={item.id}>{item.itemName}{item.expirationDate}</li>
        });
        return (
        <h1><ul>{lists}</ul></h1>
    )}
}

const mapStateToProps = state => ({
    PantryInventory:state.fridge.pantryInventory
})

export default connect(mapStateToProps)(PantryInventory);
