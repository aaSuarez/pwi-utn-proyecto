const Joi = require("@hapi/joi");


const schemas = {
    valid: Joi.object().keys({
        name: Joi.string().required().min(3),
        email:Joi.string().required().min(5),
        user:Joi.string().required().min(3),
        password: Joi.string().required().min(3)
        
    }),
    
}
module.exports = {schemas};