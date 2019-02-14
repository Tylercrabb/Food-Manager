import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Switch} from 'react-router-dom';


import HeaderBar from './components/header-bar';
import RegistrationPage from './components/registration-page'
import MainPage from './components/mainPage'
import {refreshAuthToken} from './actions/auth';


class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
}

componentWillUnmount() {
  this.stopPeriodicRefresh();
}

startPeriodicRefresh() {
  this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
  );
}

stopPeriodicRefresh() {
  if (!this.refreshInterval) {
      return;
  }

  clearInterval(this.refreshInterval);
}

  render() {
    return (
    <div className="app">        
      <HeaderBar />
      <Switch>
      <Route exact path="/register" component={RegistrationPage} />
      <Route path="/" component={MainPage} />
      </Switch>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
