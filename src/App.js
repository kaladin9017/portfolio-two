import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/header/Header';
import Banner from './components/header/Banner';
import ProjectList from './components/projects/ProjectList';

import { Segment, Comment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <Header/>
          </div>
          <Banner />
        </div>
        <div>
          <Segment basic>
            <Comment className="about-me">
              <Comment.Avatar className="about-me-img" src='http://i.imgur.com/CquTpMK.png?2' />
              <Comment.Content>
                <Comment.Metadata>
                </Comment.Metadata>
                <Comment.Text className="about-me-text">Aiming to build a web interface for people's lives-- written with the latest web technologies. Including React, Redux, D3, GraphQL and CouchDB.</Comment.Text>
              </Comment.Content>
            </Comment>
          </Segment>
        </div>
        <div className="projects">
          <ProjectList />
        </div>
      </div>
    );
  }
}

export default App;
