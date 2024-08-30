import { createSlice } from "@reduxjs/toolkit";
import { storageWorker } from "../../utils/StorageWorker.jsx";

const addContact = (state, action) => {
  const newItem = storageWorker.saveItem(action.payload);
  state.contacts.push(newItem);
}; //добавить в событие onSubmit

const removeContact = (state, action) => {
  const removedItem = storageWorker.deleteItem(action.payload);
  state.contacts = state.contacts.filter((item) => item.id !== removedItem.id);
}; // добавить в событие на кнопку

const editContact = (state, action) => {
  const newData = storageWorker.changeItem(action.payload);
  state.contacts = newData;
};

export const ContactsSlice = createSlice({
  name: "contacts",
  initialState: { contacts: [] },
  reducers: {
    addData: addContact,
    deleteData: removeContact,
    editData: editContact,
    showData: {},
  },
});

export const { addData, deleteData, editData, showData } =
  ContactsSlice.actions;

export default ContactsSlice.reducer;
