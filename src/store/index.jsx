import { configureStore } from "@reduxjs/toolkit";
import Contacts from "./slice/Contacts.jsx";

export const store = configureStore({
  reducer: { contacts: Contacts },
});
