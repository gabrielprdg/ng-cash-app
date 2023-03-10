"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoginController = void 0;
const login_controller_1 = require("../../../../../presentation/controllers/login/login-controller");
const login_validation_factory_1 = require("./login-validation-factory");
const authentication_factory_1 = require("../../../usecases/user/authentication/authentication-factory");
const load_user_by_token_factory_ts_1 = require("../../../../../main/factories/usecases/user/load-user-by-token/load-user-by-token-factory.ts");
const makeLoginController = () => {
    return new login_controller_1.LoginController((0, authentication_factory_1.makeDbAuthentication)(), (0, login_validation_factory_1.makeLoginValidation)(), (0, load_user_by_token_factory_ts_1.makeDbLoadUserByToken)());
};
exports.makeLoginController = makeLoginController;
