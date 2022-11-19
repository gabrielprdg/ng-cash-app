"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddUser = void 0;
const db_add_user_1 = require("data/usecases/user/add-user/db-add-user");
const bcrypt_adapter_1 = require("infra/criptography/bcrypt-adapter/bcrypt-adapter");
const user_typeorm_repository_1 = require("infra/db/typeorm/repository/user/user-typeorm-repository");
const makeAddUser = () => {
    const salt = 12;
    const bcryptAdapter = new bcrypt_adapter_1.BcryptAdapter(salt);
    const userTypeOrmRepo = new user_typeorm_repository_1.UserTypeOrmRepository();
    return new db_add_user_1.DbAddUser(bcryptAdapter, userTypeOrmRepo, userTypeOrmRepo);
};
exports.makeAddUser = makeAddUser;
