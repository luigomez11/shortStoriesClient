import React from 'react';
import RandomStory from './RandomStory';
import TopStories from './TopStories';

class Main extends React.Component {
    render(){
        return (
            <div>
                <RandomStory />
                <TopStories />
            </div>
        )
    }
}

export default Main;