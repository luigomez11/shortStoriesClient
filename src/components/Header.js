import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../data/stories';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        let addStoryButton;
        let myStoriesButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()} class="action--logout">Log out</button>
            );
            addStoryButton = (
                <button>Add Story</button>
            );
            myStoriesButton = (
                <button>My Stories</button>
            )
        }
        return (
            <div>
                <Link to="/main"><h1 class="app__title hh1">
                <span class="cap">S</span>
                <span class="letters">tory</span>
                <span class="cap">T</span>
                <span class="letters">ime</span>
                </h1></Link>
                {logOutButton}
                <div class="main-actions">
                  <Link to="/addStory" class="action--add">{addStoryButton}</Link>
                  <Link to="/myStories" class="action--my">{myStoriesButton}</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
