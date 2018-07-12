const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateRegistration = validate => {
  let validationError = {};

  // Making sure that we'll be working with strings for the validator package
  validate.name = !isEmpty(validate.name) ? validate.name : "";
  validate.email = !isEmpty(validate.email) ? validate.email : "";
  validate.password = !isEmpty(validate.password) ? validate.password : "";

  if (validator.isEmpty(validate.name)) {
    validationError.name = "The Name field is required.";
  }

  if (validator.isEmpty(validate.email)) {
    validationError.email = "The Email field is required.";
  }

  if (validator.isEmpty(validate.password)) {
    validationError.password = "The Password field is required.";
  }

  if (!validator.isEmail(validate.email)) {
    validationError.email = "This is not a valid email address.";
  }

  if (!validator.isLength(validate.password, { min: 5, max: 32 })) {
    validationError.password = "Password must be between 5-32 characters";
  }

  if (!validator.isLength(validate.name.trim(), { min: 2, max: 30 })) {
    validationError.name = "Name must be atleast 2 and max 30 characters long.";
  }

  return {
    validationError,
    isValid: isEmpty(validationError)
  };
};

module.exports = validateRegistration;
