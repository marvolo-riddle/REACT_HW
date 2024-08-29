import TodoItem from "../TodoItem";

const TodoList = ({ todos, deleteItem, selectChange, showItem }) => {
  return (
    !!todos.length &&
    todos.map((item) => (
      <div key={item.id}>
        <TodoItem
          id={item.id}
          title={item.title}
          descriptions={item.description}
          deleteItem={deleteItem}
          selectChange={selectChange}
          showItem={showItem}
        ></TodoItem>
      </div>
    ))
  );
};

export default TodoList;
