"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTransactionController = void 0;
const transact_value_insufficient_1 = require("../../../../presentation/errors/transact-value-insufficient");
const http_helper_1 = require("../../../../presentation/helpers/https/http-helper");
const self_transaction_error_1 = require("../../../../presentation/errors/self-transaction-error");
class AddTransactionController {
    constructor(addTransaction, selfTransactionVerify, validation) {
        this.addTransaction = addTransaction;
        this.selfTransactionVerify = selfTransactionVerify;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.body);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const { username, value } = httpRequest.body;
            console.log(httpRequest);
            const userId = httpRequest.userId;
            const isSelfTransaction = await this.selfTransactionVerify.verify(username, userId);
            if (isSelfTransaction) {
                return (0, http_helper_1.forbidden)(new self_transaction_error_1.SelfTransactionError());
            }
            const transactId = await this.addTransaction.add({
                username,
                value,
                userId
            });
            console.log(transactId, 'rd');
            if (!transactId) {
                return (0, http_helper_1.forbidden)(new transact_value_insufficient_1.InsufficientValueError());
            }
            return (0, http_helper_1.noContent)();
        }
        catch (err) {
            return (0, http_helper_1.serverError)(err);
        }
    }
}
exports.AddTransactionController = AddTransactionController;
