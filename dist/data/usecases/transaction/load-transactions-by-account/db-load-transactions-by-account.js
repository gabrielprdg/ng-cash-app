"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadTransactionsByAccount = void 0;
class DbLoadTransactionsByAccount {
    constructor(loadTransactionsByAccountRepository) {
        this.loadTransactionsByAccountRepository = loadTransactionsByAccountRepository;
    }
    async loadByAccount(id) {
        const transactions = await this.loadTransactionsByAccountRepository.loadByAccount(id);
        console.log('inthe', transactions);
        return transactions;
    }
}
exports.DbLoadTransactionsByAccount = DbLoadTransactionsByAccount;
