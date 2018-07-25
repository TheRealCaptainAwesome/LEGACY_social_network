const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateComment = validate => {
  let validationError = {};

  // Making sure that we'll be working with strings for the validator package
  validate.text = !isEmpty(validate.text) ? validate.text : "";

  if (!validator.isLength(validate.text, { min: 5, max: 100 })) {
    validationError.text =
      "The comment needs to be atleast 5 and max 100 characters long.";
  }

  return {
    validationError,
    isValid: isEmpty(validationError)
  };
};

module.exports = validateComment;
