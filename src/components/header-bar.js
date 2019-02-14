import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {clearErrorMessage, clearFridgeInventory, clearPantryInventory} from '../actions'

import './flex.css'
export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        this.props.dispatch(clearErrorMessage())
        this.props.dispatch(clearFridgeInventory())
        this.props.dispatch(clearPantryInventory())
    }
    
    render() {
       
        // Only render the log out button if we are logged in
        let greeting;
        if(this.props.loggedIn){
            greeting = `Welcome ${this.props.userName.username}`
        }
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button
                id = "log-out-button"
                onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            
            <div className="header-bar">
                <h1>Food Manager</h1>
                {this.props.error}
                {this.props.loading ? <p>loading...</p>: <p>{greeting}</p>}
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    userName: state.auth.currentUser,
    loading: state.food.isLoading,
    error: state.food.errorMessage
    
});

export default connect(mapStateToProps)(HeaderBar);