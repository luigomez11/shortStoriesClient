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
                <button onClick={() => this.logOut()} className="action--logout">Log out</button>
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
                <Link to="/main"><h1 className="app__title hh1">
                <span className="cap">S</span>
                <span className="letters">tory</span>
                <span className="cap">T</span>
                <span className="letters">ime</span>
                </h1></Link>
                {logOutButton}
                <div className="main-actions">
                  <Link to="/addStory" className="action--add">{addStoryButton}</Link>
                  <Link to="/myStories" className="action--my">{myStoriesButton}</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
