const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateLogin = validate => {
  let validationError = {};

  // Making sure that we'll be working with strings for the validator package
  validate.email = !isEmpty(validate.email) ? validate.email : "";
  validate.password = !isEmpty(validate.password) ? validate.password : "";

  if (validator.isEmpty(validate.email)) {
    validationError.email = "The Email field is required.";
  }

  if (validator.isEmpty(validate.password)) {
    validationError.password = "The Password field is required.";
  }

  if (!validator.isEmail(validate.email)) {
    validationError.email = "This is not a valid email address.";
  }

  return {
    validationError,
    isValid: isEmpty(validationError)
  };
};

module.exports = validateLogin;
