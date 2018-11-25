import React, { Component } from "react";
import { Post } from "../requests";

class PostShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      post: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Post.one(id).then(post => {
      this.setState({
        post: post,
        loading: false
      });
      console.log(this.state.post)
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <main className="PostShowPage">
          <h2>Loading...</h2>
        </main>
      );
    }

    if (!this.state.post) {
      return (
        <main className="PostShowPage">
          <h1>Post doesn't exist!</h1>
        </main>
      );
    }
    return (
      <main className="PostShowPage">
        <h2>{this.state.post.id} - {this.state.post.title}</h2>
        <p>{this.state.post.content}</p>
      </main>
    );
  }
}
export default PostShowPage;