"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signup_controller_factory_1 = require("../../main/factories/controllers/login/signup/signup-controller-factory");
const express_route_adapter_1 = require("../../main/adapters/express-route-adapter");
const login_controller_factory_1 = require("../../main/factories/controllers/login/login/login-controller-factory");
exports.default = (router) => {
    router.post('/login', (0, express_route_adapter_1.adaptRoute)((0, login_controller_factory_1.makeLoginController)()));
    router.post('/signup', (0, express_route_adapter_1.adaptRoute)((0, signup_controller_factory_1.makeSignUpController)()));
};
