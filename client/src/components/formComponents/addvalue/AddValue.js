import React from "react";
import PropTypes from "prop-types";

const AddValue = ({
  name,
  placeholder,
  value,
  onChange,
  id,
  addToList,
  itemArray
}) => {
  return (
    <div>
      <label htmlFor={id}>Add {id}</label>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        id={id}
      />
      <div onClick={addToList}>Add {id}</div>
      <ul>
        {itemArray.length > 0 ? (
          itemArray.map((item, i) => <li key={i}>{item}</li>)
        ) : (
          <li>No {id} added yet.</li>
        )}
      </ul>
    </div>
  );
};

AddValue.defaultProps = {
  itemArray: []
};

AddValue.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  addToList: PropTypes.func.isRequired,
  itemArray: PropTypes.array
};

export default AddValue;
