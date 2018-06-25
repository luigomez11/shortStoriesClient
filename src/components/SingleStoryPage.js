import React from 'react';
import {connect} from 'react-redux';
import SingleStory from './SingleStory';
import RequiresLogin from './RequiresLogin';

class SingleStoryPage extends React.Component {
    render(){
        const single = this.props.stories.find((stories) => 
            stories.id === this.props.match.params.storyId);
        return (
            <SingleStory {...single}/>
        )
    }
}

const mapStateToProps = state => ({
    stories: state.rootReducer.stories || []
})

export default RequiresLogin()(connect(mapStateToProps)(SingleStoryPage));
