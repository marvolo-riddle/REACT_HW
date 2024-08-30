import { Routes, Route } from "react-router-dom";
import List from "../components/List";
import Form from "../components/Form";
import Item from "../components/Item";

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <div>
          <Form />
          <List />
        </div>
      }
    />
    <Route path="/list" element={<List />} />
    <Route path="/list/:id" element={<Item />} />
  </Routes>
);

export default AppRoutes;
