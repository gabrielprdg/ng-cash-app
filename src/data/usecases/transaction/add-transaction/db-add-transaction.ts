import { Decrypter } from '../../../../data/protocols/criptography/decrypter'
import { LoadAccountByIdRepository } from '../../../../data/protocols/db/account/load-account-by-account-id'
import { UpdateBalanceRepository } from '../../../../data/protocols/db/account/update-balance-repository'
import { AddTransactionRepository } from '../../../../data/protocols/db/transaction/add-transaction-repository'
import { LoadUserByIdRepository } from '../../../../data/protocols/db/user/load-user-by-id-repository'
import { LoadUserByUserNameRepository } from '../../../../data/protocols/db/user/load-user-by-username'
import { AddTransaction, AddTransactionParams } from '../../../../domain/usecases/transaction/add-transaction'

export class DbAddTransaction implements AddTransaction {
  private readonly addTransactionRepository: AddTransactionRepository
  private readonly loadUserByUserNameRepository: LoadUserByUserNameRepository
  private readonly loadAccountByIdRepository: LoadAccountByIdRepository
  private readonly loadUserByIdRepository: LoadUserByIdRepository
  private readonly updateBalanceRepository: UpdateBalanceRepository
  private readonly decrypter: Decrypter

  constructor (
    addTransactionRepository: AddTransactionRepository,
    loadUserByUserNameRepository: LoadUserByUserNameRepository,
    loadAccountByIdRepository: LoadAccountByIdRepository,
    loadUserByIdRepository: LoadUserByIdRepository,
    updateBalanceRepository: UpdateBalanceRepository,
    decrypter: Decrypter
  ) {
    this.addTransactionRepository = addTransactionRepository
    this.loadUserByUserNameRepository = loadUserByUserNameRepository
    this.loadAccountByIdRepository = loadAccountByIdRepository
    this.loadUserByIdRepository = loadUserByIdRepository
    this.updateBalanceRepository = updateBalanceRepository
    this.decrypter = decrypter
  }

  async add (accountData: AddTransactionParams): Promise<string> {
    console.log('4', accountData)
    const user = await this.loadUserByUserNameRepository.loadByUsername(accountData.username)
    console.log('de', user)
    const decodedToken = accountData.userId

    const creditedAccountId = user.account.id
    console.log('3', creditedAccountId)
    const creditedAccount = await this.loadAccountByIdRepository.loadById(creditedAccountId)

    const debitedUser = await this.loadUserByIdRepository.loadById(decodedToken)

    const debitedAccount = await this.loadAccountByIdRepository.loadById(debitedUser.account.id)
    console.log('skd')

    if (!(debitedAccount.balance - accountData.value < 0)) {
      console.log('aki')

      await this.updateBalanceRepository.update(creditedAccount.id, creditedAccount.balance += accountData.value)
      await this.updateBalanceRepository.update(debitedAccount.id, debitedAccount.balance -= accountData.value)

      const transactId = await this.addTransactionRepository.add({
        debitedAccount,
        creditedAccount,
        value: accountData.value
      })
      console.log('gol do ', transactId)
      return transactId
    }

    return null
  }
}
