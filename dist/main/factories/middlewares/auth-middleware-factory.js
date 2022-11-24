"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthMiddleware = void 0;
const jwt_adapter_1 = require("../../../infra/criptography/jwt-adapter/jwt-adapter");
const auth_middleware_1 = require("../../../presentation/middlewares/auth-middleware");
const makeAuthMiddleware = (role) => {
    const jwtAdapter = new jwt_adapter_1.JwtAdapter(process.env.JWT_SECRET);
    return new auth_middleware_1.AuthMiddleware(jwtAdapter);
};
exports.makeAuthMiddleware = makeAuthMiddleware;
