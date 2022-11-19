"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredFieldsValidation = void 0;
const missing_param_error_1 = require("../../presentation/errors/missing-param-error");
class RequiredFieldsValidation {
    constructor(fieldName) {
        this.fiedlName = fieldName;
    }
    validate(input) {
        if (!input[this.fiedlName]) {
            return new missing_param_error_1.MissingParamError(this.fiedlName);
        }
    }
}
exports.RequiredFieldsValidation = RequiredFieldsValidation;
