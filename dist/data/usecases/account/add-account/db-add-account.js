"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddAccount = void 0;
class DbAddAccount {
    constructor(addAccountRepository) {
        this.addAccountRepository = addAccountRepository;
    }
    async add(accountData) {
        const account = await this.addAccountRepository.add(accountData);
        console.log('presidente', account);
        return account;
    }
}
exports.DbAddAccount = DbAddAccount;
