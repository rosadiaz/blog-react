import React, { Component } from 'react';
import './App.css';
import PostNewPage from './PostNewPage';
import NavBar from './NavBar';
import PostIndexPage from './PostIndexPage';
import PostShowPage from './PostShowPage';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={PostIndexPage} />
          <Route path="/posts/new" exact component={PostNewPage} />
          <Route path="/posts/:id" exact component={PostShowPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
