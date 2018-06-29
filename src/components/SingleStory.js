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
                <Link to="/after"><button onClick={this.delete} class="action--delete">Delete</button></Link>
            );
        }
        return (
            <div class="story__item">
                <Link to={'/story/'+this.props.id}>
                    <h3 class="story__title">{this.props.title}</h3>
                    <p class="story__body">{this.props.body}</p>
                </Link>
                <button onClick={this.increment} class="action--like">Likes: {this.props.likes}</button>
                <Link to="/myStories" class="action-my">{deleteButton}</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stories: state.rootReducer.stories || [],
    userNow: state.auth.currentUser.username
})

export default RequiresLogin()(connect(mapStateToProps)(SingleStory));
