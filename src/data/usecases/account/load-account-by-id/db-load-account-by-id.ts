import { LoadAccountByIdRepository } from '../../../../data/protocols/db/account/load-account-by-account-id'
import { AccountModel } from '../../../../domain/models/account'
import { LoadAccountById } from '../../../../domain/usecases/account/load-account-by-id'

export class DbLoadAccountById implements LoadAccountById {
  private readonly loadAccountByIdRepository: LoadAccountByIdRepository

  constructor (loadAccountByIdRepository: LoadAccountByIdRepository) {
    this.loadAccountByIdRepository = loadAccountByIdRepository
  }

  async loadById (id: string): Promise<AccountModel> {
    const account = await this.loadAccountByIdRepository.loadById(id)
    return account
  }
}
