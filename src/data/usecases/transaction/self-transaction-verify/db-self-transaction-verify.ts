import { LoadAccountByIdRepository } from 'data/protocols/db/account/load-account-by-account-id'
import { LoadUserByIdRepository } from 'data/protocols/db/user/load-user-by-id-repository'
import { LoadUserByUserNameRepository } from 'data/protocols/db/user/load-user-by-username'
import { SelfTransactionVerify } from '../../../../domain/usecases/transaction/self-transaction-verify'

export class DbSelfTransactionVerify implements SelfTransactionVerify {
  private readonly loadUserByUserNameRepository: LoadUserByUserNameRepository
  private readonly loadAccountByIdRepository: LoadAccountByIdRepository
  private readonly loadUserByIdRepository: LoadUserByIdRepository

  constructor (
    loadUserByUserNameRepository: LoadUserByUserNameRepository,
    loadAccountByIdRepository: LoadAccountByIdRepository,
    loadUserByIdRepository: LoadUserByIdRepository
  ) {
    this.loadUserByUserNameRepository = loadUserByUserNameRepository
    this.loadAccountByIdRepository = loadAccountByIdRepository
    this.loadUserByIdRepository = loadUserByIdRepository
  }

  async verify (username: string, userId: string): Promise<boolean> {
    const user = await this.loadUserByUserNameRepository.loadByUsername(username)

    const creditedAccountId = user.account.id

    const creditedAccount = await this.loadAccountByIdRepository.loadById(creditedAccountId)
    const debitedUser = await this.loadUserByIdRepository.loadById(userId)
    const debitedAccount = await this.loadAccountByIdRepository.loadById(debitedUser.account.id)

    return creditedAccount.id === debitedAccount.id
  }
}
