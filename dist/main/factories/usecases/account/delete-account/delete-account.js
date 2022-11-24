"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteAccount = void 0;
const db_delete_account_1 = require("../../../../../data/usecases/account/delete-account/db-delete-account");
const account_typeorm_repository_1 = require("../../../../../infra/db/typeorm/repository/account/account-typeorm-repository");
const makeDeleteAccount = () => {
    const accountTypeOrmRepo = new account_typeorm_repository_1.AccountTypeOrmRepository();
    return new db_delete_account_1.DbDeleteAccount(accountTypeOrmRepo);
};
exports.makeDeleteAccount = makeDeleteAccount;
