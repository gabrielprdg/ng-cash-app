"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddTransaction = void 0;
const account_typeorm_repository_1 = require("../../../../../infra/db/typeorm/repository/account/account-typeorm-repository");
const db_add_transaction_1 = require("../../../../../data/usecases/transaction/add-transaction/db-add-transaction");
const jwt_adapter_1 = require("../../../../../infra/criptography/jwt-adapter/jwt-adapter");
const transaction_typeorm_repository_1 = require("../../../../../infra/db/typeorm/repository/transaction/transaction-typeorm-repository");
const user_typeorm_repository_1 = require("../../../../../infra/db/typeorm/repository/user/user-typeorm-repository");
const makeAddTransaction = () => {
    const userTypeOrmRepo = new user_typeorm_repository_1.UserTypeOrmRepository();
    const jwtAdapter = new jwt_adapter_1.JwtAdapter(process.env.JWT_SECRET);
    const transactionTypeOrmRepo = new transaction_typeorm_repository_1.TransactionTypeOrmRepository();
    const accountTypeOrmRepo = new account_typeorm_repository_1.AccountTypeOrmRepository();
    return new db_add_transaction_1.DbAddTransaction(transactionTypeOrmRepo, userTypeOrmRepo, accountTypeOrmRepo, userTypeOrmRepo, accountTypeOrmRepo, jwtAdapter);
};
exports.makeAddTransaction = makeAddTransaction;
