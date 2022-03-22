import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6228ce329fd6174ca82ff74e.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const response = await axios.get("/contacts");
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data) => {
    const contact = {
      name: data.name,
      number: data.number,
      completed: false,
    };
    const response = await axios.post("/contacts", contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  }
);
