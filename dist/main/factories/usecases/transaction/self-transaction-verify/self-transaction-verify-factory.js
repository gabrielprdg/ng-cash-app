"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSelfTransactionVerify = void 0;
const db_self_transaction_verify_1 = require("../../../../../data/usecases/transaction/self-transaction-verify/db-self-transaction-verify");
const account_typeorm_repository_1 = require("../../../../../infra/db/typeorm/repository/account/account-typeorm-repository");
const user_typeorm_repository_1 = require("../../../../../infra/db/typeorm/repository/user/user-typeorm-repository");
const makeSelfTransactionVerify = () => {
    const userTypeOrmRepo = new user_typeorm_repository_1.UserTypeOrmRepository();
    const accountTypeOrmRepo = new account_typeorm_repository_1.AccountTypeOrmRepository();
    return new db_self_transaction_verify_1.DbSelfTransactionVerify(userTypeOrmRepo, accountTypeOrmRepo, userTypeOrmRepo);
};
exports.makeSelfTransactionVerify = makeSelfTransactionVerify;
