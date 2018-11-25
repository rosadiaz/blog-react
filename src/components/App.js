import React, { Component } from 'react';
import './App.css';
import PostNewPage from './PostNewPage';
import NavBar from './NavBar';
import PostIndexPage from './PostIndexPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PostIndexPage />
        <PostNewPage />
      </div>
    );
  }
}

export default App;
