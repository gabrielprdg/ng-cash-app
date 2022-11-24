"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTypeOrmRepository = void 0;
const typeorm_transaction_1 = require("../../entity/typeorm-transaction");
const app_data_source_1 = require("../../helper/app-data-source");
class TransactionTypeOrmRepository {
    async add(transactionData) {
        console.log('o console', transactionData);
        const transaction = new typeorm_transaction_1.TypeOrmTransaction();
        transaction.debitedAccount = transactionData.debitedAccount;
        transaction.creditedAccount = transactionData.creditedAccount;
        transaction.value = transactionData.value;
        const result = await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_transaction_1.TypeOrmTransaction)
            .save(transaction);
        return result.id;
    }
    async loadByAccount(id) {
        const result = await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_transaction_1.TypeOrmTransaction)
            .createQueryBuilder('transaction')
            .leftJoinAndSelect('transaction.debitedAccount', 'debitedAccountId')
            .leftJoinAndSelect('transaction.creditedAccount', 'creditedAccountId')
            .where('transaction.debitedAccount = :debitedAccount', { debitedAccount: id })
            .orWhere('transaction.creditedAccount = :creditedAccount', { creditedAccount: id })
            .getMany();
        return result;
    }
}
exports.TransactionTypeOrmRepository = TransactionTypeOrmRepository;
