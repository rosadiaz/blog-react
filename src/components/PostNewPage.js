import React, { Component } from "react";
import PostForm from "./PostForm";
import { Post } from "../requests";

class PostNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      post: null
    };

    // this.deletePost = this.deletePost.bind(this);
    // this.deleteAnswer = this.deleteAnswer.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: false })
  }
  createPost = (formData) => {
    Post.create(formData)
    .then((res) => {
      console.log("success", res);
      this.props.history.push(`/`);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <main className="PostNewPage">
          <h2>Loading...</h2>
        </main>
      );
    }

    return (
      <main className="PostNewPage">
        <h1>New Post</h1>
        <PostForm onSubmit={this.createPost}/>
      </main>

    );
  }
}
export default PostNewPage;