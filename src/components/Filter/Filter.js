import React from "react";
import PropTypes from "prop-types";
import { FilterHeader, FilterInput } from "./Filter.styled";
import { useSelector, useDispatch } from "react-redux";
import * as contactActions from "../../redux/actions";
import selectors from "../../redux/selectors";

const Filter = () => {
  const value = useSelector((state) => selectors.getFilter(state));
  const dispatch = useDispatch();

  return (
    <FilterHeader>
      Найти контакт по имени
      <FilterInput
        type="text"
        value={value}
        onChange={(e) =>
          dispatch(contactActions.contactSearch(e.currentTarget.value))
        }
      />
    </FilterHeader>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
