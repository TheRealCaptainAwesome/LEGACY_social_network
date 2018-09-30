import React from "react";
import PropTypes from "prop-types";

const SocialField = ({ name, placeholder, value, onChange, icon }) => {
  return (
    <div>
      <img alt={name} src={icon} />
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SocialField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SocialField;
