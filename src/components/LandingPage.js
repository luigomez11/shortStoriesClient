import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './LoginForm';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/main" />;
    }

    return (
        <div className="home">
            <h2 className="app__title hh2">Welcome to StoryTime !</h2>
            <p className="app_description">Are you currently in the middle of some serious procrastination? Is there something you'd like to get off your chest? Waste hours away reading through various anonymous short stories or add your own story. Again, it's completely anonymous, so NO JUDGEMENT HERE! Login to join the fun.

 </p>
            <LoginForm />
            <Link to="/register"  className="register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
