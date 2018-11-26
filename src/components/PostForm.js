import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      post: props.post || {}
    }
    this.onSubmit = props.onSubmit;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    this.onSubmit({
      id: this.state.post.id,
      title: formData.get("title"),
      content: formData.get("content")
    });
  }

  handleChange = (event) => {
    const name = event.currentTarget.name;
    const value = event.target.value;
    if (name === "title") {
      this.setState({
        post: {...this.state.post, title: value}
      })
    } else if (name === "content") {
      this.setState({
        post: {...this.state.post, content: value}
      })
    }
  }
  
  componentDidMount() {
    this.setState({ loading: false })

  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <main>
            <h2>Loading ...</h2>
          </main>
        </div>
      );
    }
    
    return (
    <form className="PostForm" onSubmit={this.handleSubmit}>
      <div>
        <label htmlFor="title">Title</label> <br />
        <input name="title" id="title" onChange={this.handleChange} value={this.state.post.title} /> 
      </div>
      <div>
        <label htmlFor="content">Content</label> <br />
        <textarea 
          name="content" 
          id="content" 
          cols="60" rows="4" 
          onChange={this.handleChange} 
          value={this.state.post.content} />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
    );
  }
}

export default PostForm;