"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordValidation = void 0;
const invalid_param_error_1 = require("../../presentation/errors/invalid-param-error");
class PasswordValidation {
    constructor(password) {
        this.password = password;
    }
    hasUpper(value) {
        return /[A-Z]/.test(value);
    }
    isNumeric(value) {
        return /[0-9]/.test(value);
    }
    validate(input) {
        const password = input[this.password];
        console.log('r', password);
        if (password.length < 8 || !this.isNumeric(password) || !this.hasUpper(password)) {
            return new invalid_param_error_1.InvalidParamError(`${this.password}`);
        }
    }
}
exports.PasswordValidation = PasswordValidation;
