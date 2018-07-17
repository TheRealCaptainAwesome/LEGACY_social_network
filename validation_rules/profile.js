const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateProfile = validate => {
  let validationError = {};

  // Making sure that we'll be working with strings for the validator package
  validate.handle = !isEmpty(validate.handle) ? validate.handle : "";
  validate.title = !isEmpty(validate.title) ? validate.title : "";
  validate.skills = !isEmpty(validate.skills) ? validate.skills : "";

  if (!validator.isLength(validate.handle, { min: 4, max: 35 })) {
    validationError.handle = "Handle needs to be between 4 and 35 characters.";
  }

  if (validator.isEmpty(validate.handle)) {
    validationError.handle = "Handle is required.";
  }

  if (validator.isEmpty(validate.title)) {
    validationError.title = "Title is required.";
  }

  if (!isEmpty(validate.twitter)) {
    if (!validator.isUrl(validate.twitter)) {
      validationError.twitter = "Not a valid URL.";
    }
  }

  if (!isEmpty(validate.facebook)) {
    if (!validator.isUrl(validate.facebook)) {
      validationError.facebook = "Not a valid URL.";
    }
  }

  if (!isEmpty(validate.instagram)) {
    if (!validator.isUrl(validate.instagram)) {
      validationError.instagram = "Not a valid URL.";
    }
  }

  return {
    validationError,
    isValid: isEmpty(validationError)
  };
};

module.exports = validateProfile;
