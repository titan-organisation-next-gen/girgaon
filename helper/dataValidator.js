const { Validator } = require('node-input-validator');
const message = require('../config/messages');

module.exports = {
    validateUserObj: async function (dataObj) {
        let { firstName, lastName, email, phone, } = dataObj
        const v = new Validator(dataObj, {
            firstName: 'string',
            lastName: 'string',
            email: 'email',
            phone: 'string|minLength:10'
        });
        let matched = await v.check();
        if (!matched) {
            throw (v.errors)
        } else {
            return {
                firstName: firstName,
                lastName: lastName,
                email: email.toLowerCase(),
                phone: phone,
            }
        }
    },
}