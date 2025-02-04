import { createAsyncThunk } from "@reduxjs/toolkit";

import { instance } from "../auth/operations";
import toast from "react-hot-toast";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("contacts");
      if (data.length === 0) {
        toast.success("Your contact list is Empty. Please add new contact!");
      } else {
        toast.success("Contacts was loaded");
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const { data } = await instance.post("contacts", contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  "contacts/editContact",
  async ({ contactId, updatedData }, thunkApi) => {
    try {
      const { data } = await instance.patch(
        `contacts/${contactId}`,
        updatedData
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
