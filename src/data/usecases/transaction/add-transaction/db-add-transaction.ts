import { LoadUserByUserNameRepository } from '../../../../data/protocols/db/user/load-user-by-username'
import { AddTransactionRepository } from '../../../../data/protocols/db/transaction/add-transaction-repository'
import { AddTransaction, AddTransactionParams } from '../../../../domain/usecases/transaction/add-transaction'
import { Decrypter } from 'data/protocols/criptography/decrypter'

export class DbAddTransaction implements AddTransaction {
  private readonly addTransactionRepository: AddTransactionRepository
  private readonly loadUserByUserNameRepository: LoadUserByUserNameRepository
  private readonly decrypter: Decrypter

  constructor (
    addTransactionRepository: AddTransactionRepository,
    loadUserByUserNameRepository: LoadUserByUserNameRepository,
    decrypter: Decrypter
  ) {
    this.addTransactionRepository = addTransactionRepository
    this.loadUserByUserNameRepository = loadUserByUserNameRepository
    this.decrypter = decrypter
  }

  async add (accountData: AddTransactionParams): Promise<void> {
    const user = await this.loadUserByUserNameRepository.loadByUsername(accountData.username)
    const decodedToken = await this.decrypter.decrypt(accountData.accessToken)

    console.log('tf', decodedToken)
    const creditedAccountId = user.accountId
    const debitedAccountId = decodedToken

    await this.addTransactionRepository.add({ debitedAccountId, creditedAccountId, value: accountData.value })
  }
}
