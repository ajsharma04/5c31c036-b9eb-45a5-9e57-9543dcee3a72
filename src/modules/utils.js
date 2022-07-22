const expressValidator = require('express-validator')

    var validateInput = (input) => {    
    expressValidator(input.not().isEmpty().trim().escape().withMessage('Invalid input'))
}

    var isEmptyOrSpaces = (str) => {
    return str === null || str === undefined;
}   

module.exports = { validateInput , isEmptyOrSpaces} ;
