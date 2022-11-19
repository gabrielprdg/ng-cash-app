"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignUpValidation = void 0;
const required_fields_validation_1 = require("../../../../../validation/validators/required-fields-validation");
const username_validation_1 = require("../../../../../validation/validators/username-validation");
const validation_composite_1 = require("../../../../../validation/validators/validation-composite");
const makeSignUpValidation = () => {
    const validations = [];
    for (const field of ['username', 'password']) {
        validations.push(new required_fields_validation_1.RequiredFieldsValidation(field));
    }
    validations.push(new username_validation_1.UsernameValidation('username'));
    return new validation_composite_1.ValidationComposite(validations);
};
exports.makeSignUpValidation = makeSignUpValidation;
