"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadUserByToken = void 0;
const db_load_user_by_token_1 = require("../../../../../data/usecases/user/load-user-by-token/db-load-user-by-token");
const jwt_adapter_1 = require("../../../../../infra/criptography/jwt-adapter/jwt-adapter");
const user_typeorm_repository_1 = require("../../../../../infra/db/typeorm/repository/user/user-typeorm-repository");
const makeDbLoadUserByToken = () => {
    const jwtAdapter = new jwt_adapter_1.JwtAdapter(process.env.JWT_SECRET);
    const userTypeOrmRepository = new user_typeorm_repository_1.UserTypeOrmRepository();
    return new db_load_user_by_token_1.DbLoadUserByToken(jwtAdapter, userTypeOrmRepository);
};
exports.makeDbLoadUserByToken = makeDbLoadUserByToken;
