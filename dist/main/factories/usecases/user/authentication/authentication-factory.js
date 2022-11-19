"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAuthentication = void 0;
const authentication_1 = require("data/usecases/user/authentication/authentication");
const bcrypt_adapter_1 = require("infra/criptography/bcrypt-adapter/bcrypt-adapter");
const jwt_adapter_1 = require("infra/criptography/jwt-adapter/jwt-adapter");
const user_typeorm_repository_1 = require("infra/db/typeorm/repository/user/user-typeorm-repository");
const makeDbAuthentication = () => {
    const salt = 12;
    const bcryptAdapter = new bcrypt_adapter_1.BcryptAdapter(salt);
    const jwtAdapter = new jwt_adapter_1.JwtAdapter(process.env.JWT_SECRET);
    const accountTypeOrmRepository = new user_typeorm_repository_1.UserTypeOrmRepository();
    return new authentication_1.DbAthentication(accountTypeOrmRepository, bcryptAdapter, jwtAdapter, accountTypeOrmRepository);
};
exports.makeDbAuthentication = makeDbAuthentication;
