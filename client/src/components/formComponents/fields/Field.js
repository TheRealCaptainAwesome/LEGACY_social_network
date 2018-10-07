import React from "react";
import PropTypes from "prop-types";
import "./Field.css";

const Field = ({ name, type, placeholder, value, onChange, id, disabled }) => {
  return (
    <div>
      <label htmlFor={id}>{id}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        disabled={disabled}
      />
    </div>
  );
};

Field.defaultProps = {
  type: "text"
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  disabled: PropTypes.string
};

export default Field;
