const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegistration(validate) {
    let err = {};

    if(!validator.isLength(validate.name, { min: 2, max: 30 })){
        err.name = 'Name must be atleast 2 and max 30 characters long.'
    }

    return {
        err,
        isValid: isEmpty(err)
    }

}