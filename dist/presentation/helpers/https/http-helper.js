"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forbidden = exports.badRequest = exports.ok = exports.serverError = void 0;
const server_error_1 = require("../../errors/server-error");
const serverError = (error) => ({
    body: new server_error_1.ServerError(error.stack),
    statusCode: 500
});
exports.serverError = serverError;
const ok = (data) => ({
    body: data,
    statusCode: 200
});
exports.ok = ok;
const badRequest = (error) => ({
    body: error,
    statusCode: 400
});
exports.badRequest = badRequest;
const forbidden = (error) => ({
    body: error,
    statusCode: 403
});
exports.forbidden = forbidden;
