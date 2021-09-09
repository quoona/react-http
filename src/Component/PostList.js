import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error Displaying Data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h1>List Of Post</h1>
        {posts.length
          ? posts.map((post) => (
              <div key={post.id}>
                <h1>User Id: {post.userId}</h1>
                <p>Title Post: {post.title}</p>
              </div>
            ))
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
