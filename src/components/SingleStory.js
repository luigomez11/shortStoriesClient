import React from 'react';
import { connect } from 'react-redux';
import { incrementLikes, deleteStory } from '../actions/index';
import { Link } from 'react-router-dom';
import RequiresLogin from './RequiresLogin';

class SingleStory extends React.Component {

    increment = () => {
        const newLike = this.props.likes + 1;
        this.props.dispatch(incrementLikes(this.props.id, newLike));

    }

    delete = () => {
        this.props.dispatch(deleteStory(this.props.id));
    }

    render(){
        let deleteButton;
        if(this.props.user === this.props.userNow){
            deleteButton = (
                <button onClick={this.delete}>Delete</button>
            );
        }
        return (
            <div>
                <Link to={'/story/'+this.props.id}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.body}</p>
                </Link>
                <button onClick={this.increment}>Likes: {this.props.likes}</button>
                <Link to="/myStories">{deleteButton}</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stories: state.rootReducer.stories || [],
    userNow: state.auth.currentUser.username
})

export default RequiresLogin()(connect(mapStateToProps)(SingleStory));