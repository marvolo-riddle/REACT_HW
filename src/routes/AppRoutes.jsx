import { Routes, Route, useParams } from "react-router-dom";
import List from "../components/List";
import Form from "../components/Form";
import Item from "../components/Item";
import { useData } from "../context/DataContext.jsx";

const AppRoutes = ({ editItem, isVisible }) => {
  const { contacts, addItem, deleteItem } = useData();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            {!isVisible && <Form onSubmit={addItem} />}
            <List
              contacts={contacts}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          </div>
        }
      />
      <Route
        path="/list"
        element={
          <List
            contacts={contacts}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        }
      />
      <Route
        path="/item/:id"
        element={<ItemWrapper editItem={editItem} deleteItem={deleteItem} />}
      />
    </Routes>
  );
};

const ItemWrapper = ({ editItem, deleteItem }) => {
  const { id } = useParams();
  const { contacts } = useData();

  const contact = contacts.find((contact) => contact.id === parseInt(id));

  if (!contact) {
    return <div>Контакт не найден</div>;
  }

  return <Item contact={contact} editItem={editItem} deleteItem={deleteItem} />;
};

export default AppRoutes;
