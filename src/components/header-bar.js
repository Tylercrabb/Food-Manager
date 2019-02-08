import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {clearErrorMessage} from '../actions'
import './inventory.css'
export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        this.props.dispatch(clearErrorMessage())
    }
    
    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        console.log(this.props)
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            
            <div className="header-bar">
                <h1>Food Manager</h1>
                {this.props.error}
                {this.props.loading ? <p>loading...</p>: null}
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    loading: state.food.isLoading,
    error: state.food.errorMessage
    
});

export default connect(mapStateToProps)(HeaderBar);