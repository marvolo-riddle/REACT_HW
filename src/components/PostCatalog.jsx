import React from "react";
import PostList from "../components/PostList";

class PostCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    await this.getData();
  }

  async getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    this.setState({ posts: data });
  }

  render() {
    return (
      <div className="posts">
        <ul className="posts__list">
          <PostList data={this.state.posts}></PostList>
        </ul>
      </div>
    );
  }
}

export default PostCatalog;
