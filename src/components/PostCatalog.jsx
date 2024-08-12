import { useState, useEffect } from "react";
import PostList from "../components/PostList";

function PostCatalog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="posts">
      <ul className="posts__list">
        <PostList data={posts}></PostList>
      </ul>
    </div>
  );
}

export default PostCatalog;
