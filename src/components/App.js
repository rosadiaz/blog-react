import React, { Component } from 'react';
import './App.css';
import PostNewPage from './PostNewPage';
import NavBar from './NavBar';
import PostIndexPage from './PostIndexPage';
import PostShowPage from './PostShowPage';
import PostEditPage from './PostEditPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={PostIndexPage} />
            <Route path="/posts/new" exact component={PostNewPage} />
            <Route path="/posts/:id" exact component={PostShowPage} />
            <Route path="/posts/:id/edit" exact component={PostEditPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
