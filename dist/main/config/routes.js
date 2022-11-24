"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transaction_routes_1 = __importDefault(require("../routes/transaction-routes"));
const login_routes_1 = __importDefault(require("../routes/login-routes"));
exports.default = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    (0, login_routes_1.default)(router);
    (0, transaction_routes_1.default)(router);
};
