"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_middleware_adapter_1 = require("../../../main/adapters/express-middleware-adapter");
const auth_middleware_factory_1 = require("./auth-middleware-factory");
exports.auth = (0, express_middleware_adapter_1.adaptMiddleware)((0, auth_middleware_factory_1.makeAuthMiddleware)());
