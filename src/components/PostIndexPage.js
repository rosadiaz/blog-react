import React, { Component } from 'react';
import { Post } from '../requests';

class PostIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // loading: true,
      posts: []
    }
  }

  componentDidMount() {
    Post.all().then(posts => {
      this.setState({ 
        // loading: false,
        posts: posts
      })
    })
  }

  render() {
    //if (this.state.loading) {
      // return (
      //   <div>
      //     <main>
      //       <h2>Loading ...</h2>
      //     </main>
      //   </div>
      // );
    //}
    return (
      <div>
        <h1>Index</h1>
          <ul>
            {this.state.posts.map(post => (
              <li key={post.id}>
                <small>
                  <em>{post.id}</em>
                </small>{" "}
                <span>{post.title}</span>
                {/* <Link to={`/posts/${post.id}`}>{post.title}</Link> */}
              </li>
            ))}
          </ul>
      </div>
    );
  }
}

export default PostIndexPage;