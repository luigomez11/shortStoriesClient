import React from 'react';
import { connect } from 'react-redux';
import { postStory } from '../actions/index';

class AddStoryForm extends React.Component {

    titleRef = React.createRef();
    storyRef = React.createRef();

    addNewStory = event => {
        event.preventDefault();
        const newStory = {
            title: this.titleRef.value,
            body: this.bodyRef.value
        }
        this.props.dispatch(postStory(newStory));

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

export default connect()(AddStoryForm);