import React from 'react';
import RandomStory from './RandomStory';
import TopStories from './TopStories';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/index';
import RequiresLogin from './RequiresLogin';
import { Link } from 'react-router-dom';

class Main extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchStories());
    }

    render(){
        return (
            <div className="main">
                <RandomStory />
                <TopStories />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        stories: state.rootReducer.stories || []
    }
};

export default RequiresLogin()(connect(mapStateToProps)(Main));