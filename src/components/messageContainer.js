import React from 'react';
import {connect} from 'react-redux';
import Dashboard from './dashboard';
import LoginForm from './login-form';

export function MessageContainer(props) {
    return <h1 className = "message-container">hi from message container!</h1>
    
}

const mapStateToProps = state => ({
   loading: state.food.isLoading,
   error: state.food.errorMessage
});

export default connect(mapStateToProps)(MessageContainer);