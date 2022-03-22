import { combineReducers } from "@reduxjs/toolkit";
import { contactSearch } from "./actions";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    let includesName = false;
    for (const item of state) {
      if (payload.name === item.name) {
        includesName = true;
        alert(`${item.name} is already in your contacts.`);
      }
    }
    if (!includesName) {
      return [...state, payload];
    }
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});

const filter = createReducer("", {
  [contactSearch]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({ items, filter, error });
