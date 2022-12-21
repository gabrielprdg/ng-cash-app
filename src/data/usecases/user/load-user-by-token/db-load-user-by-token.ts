import { LoadUserByIdRepository } from '../../../../data/protocols/db/user/load-user-by-id-repository'
import { Decrypter } from '../../../../data/protocols/criptography/decrypter'
import { UserModel } from '../../../../domain/models/user'
import { LoadUserByToken } from '../../../../domain/usecases/user/load-user-by-token'

export class DbLoadUserByToken implements LoadUserByToken {
  private readonly decrypter: Decrypter
  private readonly loadUserByIdRepository: LoadUserByIdRepository

  constructor (decrypter: Decrypter, loadUserByIdRepository: LoadUserByIdRepository) {
    this.decrypter = decrypter
    this.loadUserByIdRepository = loadUserByIdRepository
  }

  async loadByToken (accessToken: string): Promise<UserModel> {
    const userDecrypted = await this.decrypter.decrypt(accessToken)
    if (userDecrypted) {
      const user = await this.loadUserByIdRepository.loadById(userDecrypted.id)
      if (user) {
        return user
      }
    }
    return null
  }
}
