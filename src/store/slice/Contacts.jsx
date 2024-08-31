import { createSlice } from "@reduxjs/toolkit";
import storageWorker from "../../utils/StorageWorker.jsx";

const addContact = (state, action) => {
  const newItem = storageWorker.saveItem(action.payload);
  state.contacts.push(newItem);
};

const removeContact = (state, action) => {
  const removedItem = storageWorker.deleteItem(action.payload);
  state.contacts = state.contacts.filter((item) => item.id !== removedItem);
};

const editContact = (state, action) => {
  const { id, updatedValues } = action.payload;
  const newData = storageWorker.changeItem(id, updatedValues);
  state.contacts = newData;
}; //решение запомнить!!

const initialState = storageWorker.getData();

export const ContactsSlice = createSlice({
  name: "contacts",
  initialState: { contacts: initialState },
  reducers: {
    addData: addContact,
    deleteData: removeContact,
    editData: editContact,
  },
});

export const { addData, deleteData, editData } = ContactsSlice.actions;

export default ContactsSlice.reducer;
