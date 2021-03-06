import React, { Component } from "react";
import PostForm from "./PostForm";
import { Post } from "../requests";

class PostEditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      post: null,
      errors: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Post.one(id).then(post => {
      this.setState({
        post: post,
        loading: false
      });
    });  
  }
  
  editPost = (formData) => {
    Post.update(formData)
    .then((res) => {
      if (res.errors) {
        this.setState({
          errors: res.errors
        })
      } else {
        console.log("success", res);
        this.props.history.push(`/`);
      }
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
        <h1>Edit Post</h1>
        {this.state.errors.map(error => (
          <p> {error} </p>
        ))}
        <PostForm post={this.state.post} onSubmit={this.editPost}/>
      </main>
    );
  }
}
export default PostEditPage;