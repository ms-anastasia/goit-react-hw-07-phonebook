import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Name, Number, DelButton } from "./Contacts.styled";
import contactsActions from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return filteredContacts;
};
const ContactsList = () => {
  const contacts = useSelector((state) =>
    getFilteredContacts(state.contacts.items, state.contacts.filter)
  );
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(contactsActions.deleteContact(id));
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Name>{name}</Name>
          <Number>{number}</Number>
          <DelButton onClick={() => onDeleteContact(id)}>Удалить</DelButton>
        </ListItem>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactsList;
