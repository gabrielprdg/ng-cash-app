"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTransactionsController = void 0;
const http_helper_1 = require("../../../../presentation/helpers/https/http-helper");
class LoadTransactionsController {
    constructor(loadTransactionsByAccount) {
        this.loadTransactionsByAccount = loadTransactionsByAccount;
    }
    async handle(httpRequest) {
        try {
            const { id } = httpRequest.params;
            console.log('ela', id);
            const transactions = await this.loadTransactionsByAccount.loadByAccount(id);
            return (0, http_helper_1.ok)({ transactions });
        }
        catch (err) {
            return (0, http_helper_1.serverError)(err);
        }
    }
}
exports.LoadTransactionsController = LoadTransactionsController;
