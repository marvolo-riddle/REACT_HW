import Item from "../Item/Item";

const List = ({ posts, editItem, deleteItem }) => {
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <Item
            key={post.id}
            post={post}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
    </div>
  );
};

export default List;
