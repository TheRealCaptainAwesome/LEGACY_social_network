const validator = require('validator');
const isEmpty = require('./isEmpty');

const validateRegistration = validate => {
    let validationError = {};

    if(!validator.isLength(validate.name.trim(), { min: 2, max: 30 })){
        validationError.name = 'Name must be atleast 2 and max 30 characters long.'
    }

    return {
        validationError,
        isValid: isEmpty(validationError)
    }
}

module.exports = validateRegistration;