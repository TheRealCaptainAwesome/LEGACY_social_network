import React from "react";
import PropTypes from "prop-types";

const SelectList = ({ name, value, onChange, options }) => {
  const optionList = options.map(option => (
    <option value={option}>{option}</option>
  ));
  return (
    <select name={name} value={value} onChange={onChange}>
      {optionList}
    </select>
  );
};

SelectList.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectList;
