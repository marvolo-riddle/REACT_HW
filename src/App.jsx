import AppRoutes from "./routes/AppRoutes.jsx";
import { Provider } from "react-redux";
import { store } from "./store";
import { DataProvider, useData } from "./context/DataContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import EditModal from "./components/EditModal/EditModal.jsx";
import storageWorker from "./utils/StorageWorker.jsx";
import Header from "./components/Header/Header.jsx";

const App = () => {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState([]);
  const [id, setId] = useState("");

  const editItem = (id) => {
    setOpen(true);
    const currentItem = storageWorker.showItem(id);
    setContact(currentItem);
    setId(id);
  };

  const closeModal = () => {
    setOpen(false);
    setContact([]);
    setId("");
  };

  return (
    <Provider store={store}>
      <Router>
        <DataProvider>
          {!open && <Header></Header>}
          <EditModal
            open={open}
            onClose={closeModal}
            contact={contact}
            id={id}
          ></EditModal>

          <AppRoutes editItem={editItem} isVisible={open} />
        </DataProvider>
      </Router>
    </Provider>
  );
};

export default App;
