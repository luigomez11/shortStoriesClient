import React from 'react';
import { connect } from 'react-redux';
import { incrementLikes } from '../actions/index';
import { Link } from 'react-router-dom';

class SingleStory extends React.Component {

    increment = () => {
        const newLike = this.props.likes + 1;
        this.props.dispatch(incrementLikes(this.props.id, newLike));

    }

    render(){
        return (
            <div>
                <Link to={'/story/'+this.props.id}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.body}</p>
                </Link>
                <button onClick={this.increment}>Likes: {this.props.likes}</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stories: state.rootReducer.stories || []
})

export default connect(mapStateToProps)(SingleStory);