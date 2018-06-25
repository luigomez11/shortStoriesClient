import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import Header from './Header';
import LandingPage from './LandingPage';
import Main from './Main';
import RegistrationPage from './RegistrationPage';
import AddStoryForm from './AddStoryForm';
import SingleStoryPage from './SingleStoryPage';
import MyStories from './MyStories';
import {refreshAuthToken} from '../actions/auth';

import './App.css';

export class App extends React.Component {
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
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/register" component={RegistrationPage} />
            <Route exact path="/story/:storyId" component={SingleStoryPage} />
            <Route exact path="/addStory" component={AddStoryForm} />
            <Route exact path="/myStories" component={MyStories} />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));