import { AccountModel } from '../../../../domain/models/account'
import { AddAccountRepository } from '../../../../data/protocols/db/account/add-account-repository'
import { AddAccount, AddAccountParams } from '../../../../domain/usecases/account/add-account'

export class DbAddAccount implements AddAccount {
  private readonly addAccountRepository: AddAccountRepository

  constructor (addAccountRepository: AddAccountRepository) {
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountParams): Promise<AccountModel> {
    const account = await this.addAccountRepository.add(accountData)
    console.log('presidente', account)
    return account
  }
}
