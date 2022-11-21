"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddAccount = void 0;
class DbAddAccount {
    constructor(addAccountRepository) {
        this.addAccountRepository = addAccountRepository;
    }
    async add(accountData) {
        const accountId = await this.addAccountRepository.add(accountData);
        return accountId;
    }
}
exports.DbAddAccount = DbAddAccount;
