"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../../main/adapters/express-route-adapter");
const signup_controller_factory_1 = require("../../main/factories/controllers/login/signup/signup-controller-factory");
exports.default = (router) => {
    router.post('/signup', (0, express_route_adapter_1.adaptRoute)((0, signup_controller_factory_1.makeSignUpController)()));
};
