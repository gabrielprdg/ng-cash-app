"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoginValidation = void 0;
const validators_1 = require("../../../../../validation/validators");
const username_validation_1 = require("../../../../../validation/validators/username-validation");
const makeLoginValidation = () => {
    const validations = [];
    for (const field of ['username', 'password']) {
        validations.push(new validators_1.RequiredFieldsValidation(field));
    }
    validations.push(new username_validation_1.UsernameValidation('username'));
    return new validators_1.ValidationComposite(validations);
};
exports.makeLoginValidation = makeLoginValidation;
