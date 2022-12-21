"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadAccountById = void 0;
const db_load_account_by_id_1 = require("../../../../../data/usecases/account/load-account-by-id/db-load-account-by-id");
const account_typeorm_repository_1 = require("../../../../../infra/db/typeorm/repository/account/account-typeorm-repository");
const makeDbLoadAccountById = () => {
    const accountTypeOrmRepo = new account_typeorm_repository_1.AccountTypeOrmRepository();
    return new db_load_account_by_id_1.DbLoadAccountById(accountTypeOrmRepo);
};
exports.makeDbLoadAccountById = makeDbLoadAccountById;
