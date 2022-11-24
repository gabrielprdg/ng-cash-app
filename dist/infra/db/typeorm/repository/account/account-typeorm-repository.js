"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTypeOrmRepository = void 0;
const typeorm_account_1 = require("../../entity/typeorm-account");
const app_data_source_1 = require("../../helper/app-data-source");
class AccountTypeOrmRepository {
    async add(accountData) {
        const account = new typeorm_account_1.TypeOrmAccount();
        account.balance = accountData.balance;
        const result = await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_account_1.TypeOrmAccount)
            .save(account);
        return result;
    }
    async loadById(id) {
        console.log('4f', id);
        let account;
        const result = await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_account_1.TypeOrmAccount)
            .findOneBy({ id });
        if (result)
            account = result;
        return account;
    }
    async deleteById(id) {
        await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_account_1.TypeOrmAccount)
            .createQueryBuilder('account')
            .delete()
            .where({ id })
            .execute();
    }
    async update(id, newBalance) {
        await app_data_source_1.AppDataSource.getInstance()
            .createQueryBuilder()
            .update(typeorm_account_1.TypeOrmAccount)
            .set({
            balance: newBalance
        })
            .where({ id })
            .execute();
    }
}
exports.AccountTypeOrmRepository = AccountTypeOrmRepository;
