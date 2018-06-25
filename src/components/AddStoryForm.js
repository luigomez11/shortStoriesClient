import React from 'react';
import { connect } from 'react-redux';
import { postStory } from '../actions/index';
import { Link, Redirect } from 'react-router-dom';
import RequiresLogin from './RequiresLogin';

class AddStoryForm extends React.Component {

    titleRef = React.createRef();
    storyRef = React.createRef();

    addNewStory = event => {
        event.preventDefault();
        const newStory = {
            title: this.titleRef.value,
            body: this.bodyRef.value,
            user: this.props.user
        }
        this.props.dispatch(postStory(newStory));
        return <Redirect to="/myStories" />
    }

    render(){
        return (
            <form onSubmit={this.addNewStory}>
                <span>Submit Story</span><br/>
                <input ref={input => this.titleRef = input} type="text" name="title" placeholder="title"/><br />
                <textarea ref={input => this.bodyRef = input} name="body" type="text" placeholder="Tell a story."></textarea><br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    stories: state.rootReducer.stories || [],
    user: state.auth.currentUser.username || ""
})

export default RequiresLogin()(connect(mapStateToProps)(AddStoryForm));