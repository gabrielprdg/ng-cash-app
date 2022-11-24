"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const http_helper_1 = require("../../../presentation/helpers/https/http-helper");
class LoginController {
    constructor(authentication, validation) {
        this.authentication = authentication;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.body);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const { username, password } = httpRequest.body;
            const accessToken = await this.authentication.auth({
                username,
                password
            });
            if (!accessToken) {
                return (0, http_helper_1.unauthorized)();
            }
            return (0, http_helper_1.ok)({ accessToken });
        }
        catch (err) {
            return (0, http_helper_1.serverError)(err);
        }
    }
}
exports.LoginController = LoginController;
