import { combineReducers } from "@reduxjs/toolkit";
import actions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [actions.formSubmitHandler]: (state, action) => {
      let includesName = false;
      for (const item of state) {
        if (action.payload.name === item.name) {
          includesName = true;
          alert(`${item.name} is already in your contacts.`);
        }
      }
      if (!includesName) {
        return [...state, action.payload];
      }
    },
    [actions.deleteContact]: (state, action) =>
      state.filter((item) => item.id !== action.payload),
  }
);

const filter = createReducer("", {
  [actions.contactSearch]: (_, action) => action.payload,
});

export default combineReducers({ items, filter });
