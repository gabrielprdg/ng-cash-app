"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpController = void 0;
const username_in_use_error_1 = require("presentation/errors/username-in-use-error");
const http_helper_1 = require("presentation/helpers/https/http-helper");
class SignUpController {
    constructor(addUser, authentication, validation) {
        this.addUser = addUser;
        this.authentication = authentication;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = await this.validation.validate(httpRequest.body);
            if (error != null) {
                return (0, http_helper_1.badRequest)(error);
            }
            const { username, password } = httpRequest.body;
            const user = await this.addUser.add({
                username,
                password
            });
            if (!user) {
                return (0, http_helper_1.forbidden)(new username_in_use_error_1.UsernameInUseError());
            }
            // after registration, login is performed
            const accessToken = await this.authentication.auth({
                username,
                password
            });
            return (0, http_helper_1.ok)({ accessToken });
        }
        catch (err) {
            return (0, http_helper_1.serverError)(err);
        }
    }
}
exports.SignUpController = SignUpController;
