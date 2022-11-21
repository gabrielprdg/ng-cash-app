"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpController = void 0;
const username_in_use_error_1 = require("../../../presentation/errors/username-in-use-error");
const http_helper_1 = require("../../../presentation/helpers/https/http-helper");
class SignUpController {
    constructor(addUser, addAccount, authentication, validation) {
        this.addUser = addUser;
        this.addAccount = addAccount;
        this.authentication = authentication;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            console.log('tome');
            const error = this.validation.validate(httpRequest.body);
            console.log(error);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            console.log('oi');
            const { username, password } = httpRequest.body;
            // create account with 100 credits
            const accountId = await this.addAccount.add({ balance: 100 });
            console.log(accountId);
            const user = await this.addUser.add({
                username,
                password
            });
            console.log(user, 'drx');
            if (!user) {
                console.log('d3');
                return (0, http_helper_1.forbidden)(new username_in_use_error_1.UsernameInUseError());
            }
            console.log('acff');
            // after registration, login is performed
            const accessToken = await this.authentication.auth({
                username,
                password
            });
            console.log('accesstoken', accessToken);
            return (0, http_helper_1.ok)({ accessToken });
        }
        catch (err) {
            return (0, http_helper_1.serverError)(err);
        }
    }
}
exports.SignUpController = SignUpController;
