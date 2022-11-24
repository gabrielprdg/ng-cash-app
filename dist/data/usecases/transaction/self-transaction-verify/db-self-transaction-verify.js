"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbSelfTransactionVerify = void 0;
class DbSelfTransactionVerify {
    constructor(loadUserByUserNameRepository, loadAccountByIdRepository, loadUserByIdRepository) {
        this.loadUserByUserNameRepository = loadUserByUserNameRepository;
        this.loadAccountByIdRepository = loadAccountByIdRepository;
        this.loadUserByIdRepository = loadUserByIdRepository;
    }
    async verify(username, userId) {
        const user = await this.loadUserByUserNameRepository.loadByUsername(username);
        const creditedAccountId = user.account.id;
        const creditedAccount = await this.loadAccountByIdRepository.loadById(creditedAccountId);
        const debitedUser = await this.loadUserByIdRepository.loadById(userId);
        const debitedAccount = await this.loadAccountByIdRepository.loadById(debitedUser.account.id);
        return creditedAccount.id === debitedAccount.id;
    }
}
exports.DbSelfTransactionVerify = DbSelfTransactionVerify;
