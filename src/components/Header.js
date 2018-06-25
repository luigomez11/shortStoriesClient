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
                <button onClick={() => this.logOut()}>Log out</button>
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
                <Link to="/main"><h1>Random Short Stories</h1></Link>
                {logOutButton}
                <Link to="/addStory">{addStoryButton}</Link>
                <Link to="/myStories">{myStoriesButton}</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
