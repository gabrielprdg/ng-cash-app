import { Decrypter } from '../../../../data/protocols/criptography/decrypter'
import { LoadUserByTokenRepository } from '../../../../data/protocols/db/user/load-user-by-token-repository'
import { UserModel } from '../../../../domain/models/user'
import { LoadUserByToken } from '../../../../domain/usecases/user/load-user-by-token'

export class DbLoadUserByToken implements LoadUserByToken {
  private readonly decrypter: Decrypter
  private readonly loadUserByTokenRepository: LoadUserByTokenRepository

  constructor (decrypter: Decrypter, loadUserByTokenRepository) {
    this.decrypter = decrypter
    this.loadUserByTokenRepository = loadUserByTokenRepository
  }

  async load (accessToken: string, role?: string): Promise<UserModel> {
    const token = await this.decrypter.decrypt(accessToken)
    if (token) {
      const User = await this.loadUserByTokenRepository.loadByToken(accessToken, role)
      if (User) {
        return User
      }
    }
    return null
  }
}
