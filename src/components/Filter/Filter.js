import React from "react";
import { FilterHeader, FilterInput } from "./Filter.styled";
import contactsActions from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Filter = () => {
  const value = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <FilterHeader>
      Найти контакт по имени
      <FilterInput
        type="text"
        value={value}
        onChange={(e) =>
          dispatch(contactsActions.contactSearch(e.currentTarget.value))
        }
      />
    </FilterHeader>
  );
};

export default Filter;
