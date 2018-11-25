import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {

    return (
      <nav className="NavBar">
        <NavLink exact to="/">All Posts</NavLink>
        <NavLink exact to="/posts/new">New Post</NavLink>
      </nav>
    );
  }
}

export default NavBar;