import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {clearExpiringItems} from '../actions'
import LoginForm from './login-form';
import veg from '../images/veg.jpg'
export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="login-form">
        <section className= "intro-text">
            <p className ="intro">
                Did you know that the average American throws away a pound of food per day? 
                That adds up to about $2,200 a year that you could be putting in your bank account
                instead of in your garbage can. Food manager aims to reduce your waste by helping you keep track
                of what's about to expire, and suggest recipes to help you use up some of that food.
            </p>
        </section>
        <div className="home">
            <h2 className = "login-header">Login or Sign Up</h2>
            <LoginForm />
            <Link to="/register">Register</Link>
            {/* <img className= "veg-picture" alt="pretty vegetables"src={veg}/> */}
        </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);