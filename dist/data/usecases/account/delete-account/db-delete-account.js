"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteAccount = void 0;
class DbDeleteAccount {
    constructor(deleteAccountRepository) {
        this.deleteAccountRepository = deleteAccountRepository;
    }
    async deleteById(id) {
        console.log('fdgv', id);
        await this.deleteAccountRepository.deleteById(id);
    }
}
exports.DbDeleteAccount = DbDeleteAccount;
