"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpController = void 0;
const username_in_use_error_1 = require("../../../presentation/errors/username-in-use-error");
const http_helper_1 = require("../../../presentation/helpers/https/http-helper");
class SignUpController {
    constructor(addUser, addAccount, deleteAccount, authentication, validation) {
        this.addUser = addUser;
        this.addAccount = addAccount;
        this.deleteAccount = deleteAccount;
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
            const account = await this.addAccount.add({ balance: 100 });
            const user = await this.addUser.add({
                username,
                password,
                account
            });
            if (!user) {
                await this.deleteAccount.deleteById(account.id);
                return (0, http_helper_1.forbidden)(new username_in_use_error_1.UsernameInUseError());
            }
            console.log(user, '4');
            console.log('acff');
            // after registration, login is performed
            const accessToken = await this.authentication.auth({
                username,
                password
            });
            console.log('accesstoken', accessToken);
            return (0, http_helper_1.ok)({ accessToken, user });
        }
        catch (err) {
            return (0, http_helper_1.serverError)(err);
        }
    }
}
exports.SignUpController = SignUpController;
