import React from 'react';
import { connect } from 'react-redux';
import { postStory } from '../actions/index';
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
        this.titleRef.value = "";
        this.bodyRef.value = "";
    }

    render(){
        return (
            <form onSubmit={this.addNewStory} class="form--add">
                <span>Submit Story</span><br/>
                <input ref={input => this.titleRef = input} type="text" name="title" placeholder="Title"/><br />
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
