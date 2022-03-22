import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Name, Number, DelButton } from "./Contacts.styled";
import { fetchContacts, deleteContact } from "../../redux/operations";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import selectors from "../../redux/selectors";

const ContactsList = () => {
  const contacts = useSelector((state) => selectors.getVisibleContacts(state));
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  useEffect(() => dispatch(fetchContacts()), [dispatch]);
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
