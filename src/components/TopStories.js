import React from 'react';
import SingleStory from './SingleStory';
import { connect } from 'react-redux';
import { FETCH_STORIES_SUCCESS } from '../actions';

class TopStories extends React.Component {

    render(){

        const stories = this.props.stories.map((story, index) => <SingleStory key={index}{...story} />);

        /*const storiesSorted = stories.sort(function(a,b){
            return b.likes-a.likes
        });*/

        console.log(stories);
        return (
            <div class="stories">
                <p class="stories__intro">Top Stories</p>
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
