"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddAccount = void 0;
const account_typeorm_repository_1 = require("../../../../../infra/db/typeorm/repository/account/account-typeorm-repository");
const db_add_account_1 = require("../../../../../data/usecases/account/add-account/db-add-account");
const makeAddAccount = () => {
    const accountTypeOrmRepo = new account_typeorm_repository_1.AccountTypeOrmRepository();
    return new db_add_account_1.DbAddAccount(accountTypeOrmRepo);
};
exports.makeAddAccount = makeAddAccount;
