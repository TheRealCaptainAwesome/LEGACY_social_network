import React from "react";
import propTypes from "prop-types";

const Field = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Field;
