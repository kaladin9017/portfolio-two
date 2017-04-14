import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/header/Header';
import Banner from './components/header/Banner';
import ProjectList from './components/projects/ProjectList';

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
        <div className="projects">
          <ProjectList />
        </div>
      </div>
    );
  }
}

export default App;
