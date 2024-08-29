import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import storageWorker from "./utils/StorageWorker.js";
import { StyledContainer } from "./components/TodoForm/style/index.jsx";
import { StyledDiv } from "./components/TodoList/style/index.jsx";
import LinkNav from "./components/LinkNav/LinkNav.jsx";
import CurrentItem from "./components/TodoItem/CurrentItem.jsx";
import EditForm from "./components/TodoForm/EditForm.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("in_progress");

  useEffect(() => {
    const data = storageWorker.getData();
    setTodos(data);
  }, []);

  const saveTodo = (values) => {
    if (values.id) {
      storageWorker.changeItem(values.id, { ...values });
      setTodos(storageWorker.getData());
    } else {
      const newItem = storageWorker.saveItem(values, status);
      setTodos([...todos, newItem]);
    }
  };

  const deleteTodo = (itemID) => {
    storageWorker.deleteItem(itemID);
    const updatedData = todos.filter((item) => item.id !== itemID);
    setTodos(updatedData);
  };

  const selectChange = (e) => {
    const value = e.target.value;
    const id = e.target.name;
    storageWorker.changeItem(id, value);
  };

  return (
    <Router>
      <LinkNav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <StyledContainer maxWidth={false}>
                <TodoForm onSubmit={saveTodo} />
                <StyledDiv>
                  <TodoList
                    deleteItem={deleteTodo}
                    todos={todos}
                    selectChange={selectChange}
                  />
                </StyledDiv>
              </StyledContainer>
            </div>
          }
        />

        <Route
          path="/list"
          element={
            <div>
              <StyledDiv>
                <TodoList
                  deleteItem={deleteTodo}
                  todos={todos}
                  selectChange={selectChange}
                />
              </StyledDiv>
            </div>
          }
        />

        <Route
          path="/item/:id"
          element={
            <CurrentItem
              todos={todos}
              deleteItem={deleteTodo}
              selectChange={selectChange}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={<EditForm setTodos={setTodos}></EditForm>}
        />
      </Routes>
    </Router>
  );
};

export default App;
