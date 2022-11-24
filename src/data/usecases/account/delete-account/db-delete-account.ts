import { DeleteAccountRepository } from '../../../../data/protocols/db/account/delete-account-repository'
import { DeleteAccount } from '../../../../domain/usecases/account/delete-account'

export class DbDeleteAccount implements DeleteAccount {
  private readonly deleteAccountRepository: DeleteAccountRepository

  constructor (deleteAccountRepository: DeleteAccountRepository) {
    this.deleteAccountRepository = deleteAccountRepository
  }

  async deleteById (id: string): Promise<void> {
    console.log('fdgv', id)
    await this.deleteAccountRepository.deleteById(id)
  }
}
