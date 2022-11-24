"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddTransactionValidation = void 0;
const validators_1 = require("../../../../../validation/validators");
const makeAddTransactionValidation = () => {
    const validations = [];
    for (const field of ['username', 'value']) {
        validations.push(new validators_1.RequiredFieldsValidation(field));
    }
    return new validators_1.ValidationComposite(validations);
};
exports.makeAddTransactionValidation = makeAddTransactionValidation;
