import React, { createContext, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, editData } from "../store/slice/Contacts.jsx";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const addItem = (newItem) => {
    dispatch(addData(newItem));
  };
  const deleteItem = (id) => {
    dispatch(deleteData(id));
  };

  const editItem = (id, values) => {
    dispatch(editData({ id, updatedValues: values }));
  };

  return (
    <DataContext.Provider value={{ contacts, addItem, deleteItem, editItem }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
