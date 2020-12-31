const {schemas} = require("../schemas/login");


const validate = (req, res, next) => {
    const {error} = schemas.valid.validate(req.body);
    error ? res.render('error',{error: error.details[0].message}) : next();
};


module.exports = {validate};