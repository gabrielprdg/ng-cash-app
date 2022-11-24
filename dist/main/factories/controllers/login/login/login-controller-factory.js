"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoginController = void 0;
const login_controller_1 = require("../../../../../presentation/controllers/login/login-controller");
const login_validation_factory_1 = require("./login-validation-factory");
const authentication_factory_1 = require("../../../usecases/user/authentication/authentication-factory");
const makeLoginController = () => {
    return new login_controller_1.LoginController((0, authentication_factory_1.makeDbAuthentication)(), (0, login_validation_factory_1.makeLoginValidation)());
};
exports.makeLoginController = makeLoginController;
