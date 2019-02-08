import React from 'react';
import {connect} from 'react-redux';
import Dashboard from './dashboard';
import LoginForm from './login-form';
import LandingPage from './landing-page'

export function MainPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Dashboard/>;
    }
     else {return <LandingPage />}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(MainPage);