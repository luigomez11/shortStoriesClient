import React from 'react';
import { connect } from 'react-redux';
import { incrementLikes } from '../actions/index';

class SingleStory extends React.Component {

    increment = () => {
        const newLike = this.props.likes + 1;
        console.log(newLike);
        this.props.dispatch(incrementLikes(newLike));

    }

    render(){
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.story}</p>
                <button onClick={this.increment}>Likes: {this.props.likes}</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stories: state.stories || []
})

export default connect(mapStateToProps)(SingleStory);