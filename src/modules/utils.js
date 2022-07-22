const expressValidator = require('express-validator')

var validateInput = (input) => {    
    expressValidator(input.not().isEmpty().trim().escape().withMessage('Invalid input'))
}

module.exports = validateInput;
