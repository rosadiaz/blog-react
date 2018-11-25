import React, { Component } from 'react';

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
      <div>
        <a>New Post </a>
        |
        <a> Index Post </a>
      </div>
    );
  }
}

export default NavBar;