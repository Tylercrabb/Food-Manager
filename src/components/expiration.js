import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchPantryInventory, fetchFridgeInventory, setExpiringItems, clearExpiringItems} from '../actions';
const moment = require('moment');

class ExpirationItems extends Component{

    setExpiring(){
        // loop through both inventory arrays and check to see if there are ingredients that will expire soon. 
        // .split('T')[0] formats the date string into simple year-month-day configuration for easy date math with momentjs
      let expiringItems = []
        for(let i = 0; i < this.props.fridgeInventory.length; i++){
            let currentDate = new moment();
            
           if(moment(this.props.fridgeInventory[i].expirationDate.split('T')[0], 'YYYY-MM-DD').diff(currentDate, 'days') <= 2){
               expiringItems.push(this.props.fridgeInventory[i])
           }
        }

        for(let i = 0; i < this.props.pantryInventory.length; i++){
            let currentDate = new moment();
           
           if(moment(this.props.pantryInventory[i].expirationDate.split('T')[0], 'YYYY-MM-DD').diff(currentDate, 'days') <= 2){
               expiringItems.push(this.props.pantryInventory[i])
           }
        }
        this.props.dispatch(setExpiringItems(expiringItems))
    }    

 
    componentDidMount(){
        this.props.dispatch(fetchFridgeInventory())  
        this.props.dispatch(fetchPantryInventory())
        this.setExpiring()
        
    }
    render(){
        let lists = this.props.soonToExpire.map((item) => {
            return (<div className = "list-item">
                <li className = "item-name" key={item.id}>{item.itemName}</li>
                <p className = "expiration-date">This expires: {item.expirationDate.split('T')[0].split('-').slice(1).join('-')}</p>
                
                </div>)
        });
    
return (
    <div className ="Inventory-List">
    {/* turnary is used to display a nicer message if nothing in the fridge or pantry is due to expire in the next couple of days */}
        {this.props.soonToExpire.length === 0 ? <h3 className="view">Your food is fresh!</h3>: <h3 className ="view">These items will expire soon!</h3>}
        <ul className ='item-list'>{lists}</ul>
        </div>
    )
}
}


const mapStateToProps = state => ({
    fridgeInventory: state.food.fridgeInventory,
    pantryInventory: state.food.pantryInventory,
    soonToExpire: state.food.soonToExpire
});

export default connect(mapStateToProps)(ExpirationItems);