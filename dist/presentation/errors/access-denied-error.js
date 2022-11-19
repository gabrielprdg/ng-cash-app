"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessDeniedError = void 0;
class AccessDeniedError extends Error {
    constructor() {
        super('Acess Denied');
        this.name = 'AcessDeniedError';
    }
}
exports.AccessDeniedError = AccessDeniedError;
