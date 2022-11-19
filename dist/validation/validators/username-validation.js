"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernameValidation = void 0;
const invalid_param_error_1 = require("presentation/errors/invalid-param-error");
class UsernameValidation {
    constructor(username) {
        this.username = username;
    }
    validate(input) {
        const username = input[this.username];
        if (username.legth < 3) {
            return new invalid_param_error_1.InvalidParamError(`${this.username} have less than 3 characters`);
        }
    }
}
exports.UsernameValidation = UsernameValidation;
