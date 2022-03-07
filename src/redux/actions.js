import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const formSubmitHandler = createAction("contats/add", (data) => ({
  payload: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
}));
const deleteContact = createAction("contacts/delete");

const contactSearch = createAction("contacts/changeFilter");

const actions = { formSubmitHandler, deleteContact, contactSearch };

export default actions;
