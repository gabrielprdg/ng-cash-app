"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignUpController = void 0;
const add_account_factory_1 = require("../../../../../main/factories/usecases/account/add-account/add-account-factory");
const add_user_factory_1 = require("../../../../../main/factories/usecases/user/add-user/add-user-factory");
const authentication_factory_1 = require("../../../../../main/factories/usecases/user/authentication/authentication-factory");
const signup_controller_1 = require("../../../../../presentation/controllers/signup/signup-controller");
const signup_validation_factory_1 = require("./signup-validation-factory");
const makeSignUpController = () => {
    return new signup_controller_1.SignUpController((0, add_user_factory_1.makeAddUser)(), (0, add_account_factory_1.makeAddAccount)(), (0, authentication_factory_1.makeDbAuthentication)(), (0, signup_validation_factory_1.makeSignUpValidation)());
};
exports.makeSignUpController = makeSignUpController;
