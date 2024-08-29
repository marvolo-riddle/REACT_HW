import { useParams, Link } from "react-router-dom";
import TodoItem from "./TodoItem.jsx";
import { Button } from "@mui/material";

const CurrentItem = ({ todos, deleteItem, selectChange }) => {
  const { id } = useParams();
  const todo = todos.find((todo) => todo.id === Number(id));
  if (!todo) return <div>Todo not found</div>;

  return (
    <div>
      <TodoItem
        id={todo.id}
        title={todo.title}
        descriptions={todo.description}
        deleteItem={deleteItem}
        selectChange={selectChange}
      />
      <Button>
        <Link to={`/edit/${id}`}>Редактировать</Link>
      </Button>
    </div>
  );
};

export default CurrentItem;
