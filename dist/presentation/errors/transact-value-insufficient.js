"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsufficientValueError = void 0;
class InsufficientValueError extends Error {
    constructor() {
        super('The transact value is insufficient');
        this.name = 'InsufficientValueError';
    }
}
exports.InsufficientValueError = InsufficientValueError;
