import React from 'react';
import SingleStory from './SingleStory';
import { connect } from 'react-redux';

class RandomStory extends React.Component {
    render(){
        const story = this.props.stories[Math.floor(Math.random()*this.props.stories.length)];
        return (
            <div>
                <SingleStory {...story} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stories: state.stories || []
})

export default connect(mapStateToProps)(RandomStory);