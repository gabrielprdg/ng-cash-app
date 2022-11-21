import { AddAccountRepository } from 'data/protocols/db/account/add-account-repository'
import { AccountModel } from 'domain/models/account'
import { AddAccountParams } from 'domain/usecases/account/add-account'
import { InsertResult } from 'typeorm'
import { TypeOrmAccount } from '../../entity/typeorm-account'
import { AppDataSource } from '../../helper/app-data-source'

export class AccountTypeOrmRepository implements AddAccountRepository {
  async add (accountData: AddAccountParams): Promise<AccountModel> {
    const insertResult: InsertResult = await AppDataSource.getInstance()
    .createQueryBuilder()
    .insert()
    .into(TypeOrmAccount)
    .values([{ balance: accountData.balance }])
  }
}
