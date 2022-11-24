"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noContent = exports.forbidden = exports.badRequest = exports.unauthorized = exports.ok = exports.serverError = void 0;
const unauthorized_error_1 = require("../../../presentation/errors/unauthorized-error");
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
const unauthorized = () => ({
    statusCode: 401,
    body: new unauthorized_error_1.UnauthorizedError()
});
exports.unauthorized = unauthorized;
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
const noContent = () => ({
    statusCode: 204,
    body: null
});
exports.noContent = noContent;
