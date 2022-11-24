"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfTransactionError = void 0;
class SelfTransactionError extends Error {
    constructor() {
        super('it is impossible to make a transfer to yourself.');
        this.name = 'SelfTransactionError';
    }
}
exports.SelfTransactionError = SelfTransactionError;
