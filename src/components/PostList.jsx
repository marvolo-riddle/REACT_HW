function PostList({ data }) {
  return (
    <div>
      {data.map((post) => (
        <li key={post.id} className="posts_single-post" data-post-id={post.id}>
          <h3 className="posts__post-title">{post.title}</h3>
          <p className="posts__post-description">{post.body}</p>
        </li>
      ))}
    </div>
  );
}

export default PostList;
