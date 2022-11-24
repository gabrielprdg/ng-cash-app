"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadTransactionsController = void 0;
const load_transactions_by_account_controller_1 = require("../../../../../presentation/controllers/transaction/load-transactions-by-account/load-transactions-by-account-controller");
const load_transaction_factory_1 = require("../../../../../main/factories/usecases/transaction/load-transactions/load-transaction-factory");
const makeLoadTransactionsController = () => {
    return new load_transactions_by_account_controller_1.LoadTransactionsController((0, load_transaction_factory_1.makeLoadTransactions)());
};
exports.makeLoadTransactionsController = makeLoadTransactionsController;
