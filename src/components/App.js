import React from 'react';
//import { Link } from 'react-router';
import Main from './Main';
import SingleStory from './SingleStory';
import AddStoryForm from './AddStoryForm';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>
              <Link to="/">Short Stories</Link><br />
              <Link to="/addStory"><button>Add a story</button></Link>
            </h1>
          </header>
          <main>
            <Route exact path="/" component={Main} />
            <Route exact path="/story/:storyId" component={SingleStory} />
            <Route exact path="/addStory" component={AddStoryForm} />
          </main>
        </div>
      </Router>
    );
  }
}

export default connect()(App);