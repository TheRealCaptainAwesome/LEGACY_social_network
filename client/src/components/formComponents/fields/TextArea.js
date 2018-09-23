import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ name, placeholder, value, onChange }) => {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextArea;
