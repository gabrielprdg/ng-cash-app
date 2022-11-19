"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernameInUseError = void 0;
class UsernameInUseError extends Error {
    constructor() {
        super('The username is already in use');
        this.name = 'UsernameInuseError';
    }
}
exports.UsernameInUseError = UsernameInUseError;
