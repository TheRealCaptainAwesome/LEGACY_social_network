const validator = require("validator");
const isEmpty = require("./isEmpty");

const validatePost = validate => {
  let validationError = {};

  // Making sure that we'll be working with strings for the validator package
  validate.text = !isEmpty(validate.text) ? validate.text : "";

  if (!validator.isLength(validate.text, { min: 20, max: 200 })) {
    validationError.text =
      "The post needs to be atleast 20 and max 200 characters long.";
  }

  return {
    validationError,
    isValid: isEmpty(validationError)
  };
};

module.exports = validatePost;
