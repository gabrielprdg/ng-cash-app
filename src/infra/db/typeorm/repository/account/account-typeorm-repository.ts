import { AccountModel } from '../../../../../domain/models/account'
import { AddAccountRepository } from '../../../../../data/protocols/db/account/add-account-repository'
import { AddAccountParams } from '../../../../../domain/usecases/account/add-account'
import { TypeOrmAccount } from '../../entity/typeorm-account'
import { AppDataSource } from '../../helper/app-data-source'
import { DeleteAccountRepository } from '../../../../../data/protocols/db/account/delete-account-repository'
import { LoadAccountByIdRepository } from '../../../../../data/protocols/db/account/load-account-by-account-id'
import { UpdateBalanceRepository } from '../../../../../data/protocols/db/account/update-balance-repository'

export class AccountTypeOrmRepository implements AddAccountRepository, LoadAccountByIdRepository, DeleteAccountRepository, UpdateBalanceRepository {
  async add (accountData: AddAccountParams): Promise<AccountModel> {
    const account = new TypeOrmAccount()
    account.balance = accountData.balance

    const result = await AppDataSource.getInstance()
        .getRepository(TypeOrmAccount)
        .save(account)

    return result as any
  }

  async loadById (id: string): Promise<AccountModel> {
    console.log('4f', id)
    let account: AccountModel | null

    const result = await AppDataSource.getInstance()
      .getRepository(TypeOrmAccount)
      .findOneBy({ id })

      if (result) account = result

    return account
  }

  async deleteById (id: any): Promise<void> {
    await AppDataSource.getInstance()
    .getRepository(TypeOrmAccount)
    .createQueryBuilder('account')
    .delete()
    .where({ id })
    .execute()
  }

  async update (id: string, newBalance: number): Promise<void> {
    await AppDataSource.getInstance()
    .createQueryBuilder()
    .update(TypeOrmAccount)
    .set({
      balance: newBalance
    })
    .where({ id })
    .execute()
  }
}
