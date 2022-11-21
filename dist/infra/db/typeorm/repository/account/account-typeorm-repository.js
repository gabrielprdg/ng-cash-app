"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTypeOrmRepository = void 0;
const typeorm_account_1 = require("../../entity/typeorm-account");
const app_data_source_1 = require("../../helper/app-data-source");
class AccountTypeOrmRepository {
    async add(accountData) {
        const insertResult = await app_data_source_1.AppDataSource.getInstance()
            .createQueryBuilder()
            .insert()
            .into(typeorm_account_1.TypeOrmAccount)
            .values([{ balance: accountData.balance }])
            .returning('id')
            .execute();
        return insertResult.identifiers[0].id;
    }
}
exports.AccountTypeOrmRepository = AccountTypeOrmRepository;
