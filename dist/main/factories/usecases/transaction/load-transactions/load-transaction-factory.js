"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadTransactions = void 0;
const db_load_transactions_by_account_1 = require("../../../../../data/usecases/transaction/load-transactions-by-account/db-load-transactions-by-account");
const transaction_typeorm_repository_1 = require("../../../../../infra/db/typeorm/repository/transaction/transaction-typeorm-repository");
const makeLoadTransactions = () => {
    const transactionTypeOrmRepo = new transaction_typeorm_repository_1.TransactionTypeOrmRepository();
    return new db_load_transactions_by_account_1.DbLoadTransactionsByAccount(transactionTypeOrmRepo);
};
exports.makeLoadTransactions = makeLoadTransactions;
