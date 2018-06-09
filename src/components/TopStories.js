import React from 'react';
import SingleStory from './SingleStory';
import { connect } from 'react-redux';

class TopStories extends React.Component {
    render(){

        const stories = this.props.stories.map((story, index) => <SingleStory key={index}{...story} />);
        return (
            <div>
                I'm a list of the top stories.
                <ul>
                    <li>
                        {stories}
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stories: state.rootReducer.stories || []
})

export default connect(mapStateToProps)(TopStories);