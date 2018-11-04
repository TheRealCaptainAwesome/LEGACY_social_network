import React from "react";
import PropTypes from "prop-types";
import "./Field.css";

const Field = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  id,
  disabled,
  errors
}) => {
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
      {errors !== null ? <span className="error">{errors}</span> : null}
    </div>
  );
};

Field.defaultProps = {
  errors: null,
  type: "text"
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errors: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  disabled: PropTypes.string
};

export default Field;
