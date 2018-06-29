import React from 'react';
import { connect } from 'react-redux';
import { fetchUserStories } from '../actions/index';
import RequiresLogin from './RequiresLogin';
import SingleStory from './SingleStory';

class MyStories extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchUserStories(this.props.user));
    }

    render(){
        console.log(this.props.stories);
        const stories = this.props.stories.map((story, index) => <SingleStory key={index}{...story} />);
        return (
            <div class="main main--my">
            <p>Here are my submitted stories</p>
            <ul>
                <li class="stories">
                    {stories}
                </li>
            </ul>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stories: state.rootReducer.stories || [],
        user: state.auth.currentUser.username || ""
    }
};


export default RequiresLogin()(connect(mapStateToProps)(MyStories));
