"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddTransaction = void 0;
class DbAddTransaction {
    constructor(addTransactionRepository, loadUserByUserNameRepository, loadAccountByIdRepository, loadUserByIdRepository, updateBalanceRepository, decrypter) {
        this.addTransactionRepository = addTransactionRepository;
        this.loadUserByUserNameRepository = loadUserByUserNameRepository;
        this.loadAccountByIdRepository = loadAccountByIdRepository;
        this.loadUserByIdRepository = loadUserByIdRepository;
        this.updateBalanceRepository = updateBalanceRepository;
        this.decrypter = decrypter;
    }
    async add(accountData) {
        console.log('4', accountData);
        const user = await this.loadUserByUserNameRepository.loadByUsername(accountData.username);
        console.log('de', user);
        const decodedToken = accountData.userId;
        const creditedAccountId = user.account.id;
        console.log('3', creditedAccountId);
        const creditedAccount = await this.loadAccountByIdRepository.loadById(creditedAccountId);
        const debitedUser = await this.loadUserByIdRepository.loadById(decodedToken);
        const debitedAccount = await this.loadAccountByIdRepository.loadById(debitedUser.account.id);
        console.log('skd');
        if (!(debitedAccount.balance - accountData.value < 0)) {
            console.log('aki');
            await this.updateBalanceRepository.update(creditedAccount.id, creditedAccount.balance += accountData.value);
            await this.updateBalanceRepository.update(debitedAccount.id, debitedAccount.balance -= accountData.value);
            const transactId = await this.addTransactionRepository.add({
                debitedAccount,
                creditedAccount,
                value: accountData.value
            });
            console.log('gol do ', transactId);
            return transactId;
        }
        return null;
    }
}
exports.DbAddTransaction = DbAddTransaction;
