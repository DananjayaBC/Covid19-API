//VALIDATION
const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = data => {
    const schema = {
        _id: Joi.string().min(10),
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        age: Joi.string().min(1).required(),
        address: Joi.string().min(1).required(),
        location: Joi.string().min(1).required(),
        profession: Joi.string().min(1).required(),
        health: Joi.string().min(1).required(),
    };
    return Joi.validate(data, schema);
};

const loginValidation = data => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
