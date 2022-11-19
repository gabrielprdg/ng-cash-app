"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const access_denied_error_1 = require("../../presentation/errors/access-denied-error");
const http_helper_1 = require("../../presentation/helpers/https/http-helper");
class AuthMiddleware {
    constructor(loadUserByToken, role) {
        this.loadUserByToken = loadUserByToken;
        this.role = role;
    }
    async handle(httpRequest) {
        var _a;
        try {
            const accessToken = (_a = httpRequest.headers) === null || _a === void 0 ? void 0 : _a['x-access-token'];
            if (accessToken) {
                const account = await this.loadUserByToken.load(accessToken, this.role);
                if (account) {
                    return (0, http_helper_1.ok)({ accountId: account.id });
                }
            }
            return (0, http_helper_1.forbidden)(new access_denied_error_1.AccessDeniedError());
        }
        catch (err) {
            return (0, http_helper_1.serverError)(err);
        }
    }
}
exports.AuthMiddleware = AuthMiddleware;
