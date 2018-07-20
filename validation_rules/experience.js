const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateExperience = validate => {
  let validationError = {};

  // Making sure that we'll be working with strings for the validator package
  validate.title = !isEmpty(validate.title) ? validate.title : "";
  validate.company = !isEmpty(validate.company) ? validate.company : "";
  validate.from = !isEmpty(validate.from) ? validate.from : "";

  if (validator.isEmpty(validate.title)) {
    validationError.title = "The Title field is required.";
  }

  if (validator.isEmpty(validate.company)) {
    validationError.company = "The Company field is required.";
  }

  if (validator.isEmpty(validate.from)) {
    validationError.from = "The From field is required.";
  }

  return {
    validationError,
    isValid: isEmpty(validationError)
  };
};

module.exports = validateExperience;
